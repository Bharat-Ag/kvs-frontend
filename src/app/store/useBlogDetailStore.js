import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

const TTL = 5 * 60 * 1000; // 5 minutes

export const useBlogDetailStore = create((set, get) => ({
  blogDetails: {}, // { [slug]: { data, fetchedAt } }
  loading: false,
  error: null,

  /**
   * Fetch blog detail by slug
   * @param {string} slug
   * @param {boolean} force - ignore TTL
   */
  fetchBlogDetail: async (slug, force = false) => {
    const { blogDetails, loading } = get();

    if (loading) return;

    const cached = blogDetails[slug];
    const isValidTTL =
      cached && cached.fetchedAt && Date.now() - cached.fetchedAt < TTL;

    if (!force && isValidTTL) {
      // Already cached & TTL valid
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getBlogDetail(slug); // your API call

      set((state) => ({
        blogDetails: {
          ...state.blogDetails,
          [slug]: {
            data: response?.data || null,
            fetchedAt: Date.now(),
          },
        },
        loading: false,
      }));
    } catch (err) {
      set({
        error: err?.message || "Failed to fetch blog",
        loading: false,
      });
    }
  },

  /**
   * Force refresh for a specific slug
   */
  forceRefresh: async (slug) => {
    await get().fetchBlogDetail(slug, true);
  },
}));