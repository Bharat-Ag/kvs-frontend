import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

const TTL = 5 * 60 * 1000; // 5 minutes

export const useBlogStore = create((set, get) => ({
  blogs: [],
  loading: false,
  error: null,
  fetchedAt: null,

  /**
   * Fetch blogs from API with optional TTL bypass
   * @param force - If true, ignores TTL and fetches fresh data
   */
  fetchBlogs: async (force = false) => {
    const { blogs, fetchedAt, loading } = get();

    if (loading) return; // already fetching
    // skip fetch only if TTL valid and not forced
    if (!force && blogs.length && fetchedAt && Date.now() - fetchedAt < TTL) {
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getBlogs();

      set({
        blogs: response?.data || [],
        fetchedAt: Date.now(),
        loading: false,
      });
    } catch (err) {
      set({
        error: err?.message || "Failed to fetch blogs",
        loading: false,
      });
    }
  },

  /**
   * Manual refresh: forces new data from backend
   */
  forceRefresh: async () => {
    await get().fetchBlogs(true); // force fetch ignores TTL
  },
}));