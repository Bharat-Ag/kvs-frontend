import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

const TTL = 5 * 60 * 1000; // 5 minutes

export const useProductDetailStore = create((set, get) => ({
  productDetails: {}, // { [slug]: { data, fetchedAt } }
  loading: false,
  error: null,

  /**
   * Fetch product detail by slug
   * @param {string} slug
   * @param {boolean} force - ignore TTL
   */
  fetchProductDetail: async (slug, force = false) => {
    const { productDetails, loading } = get();

    if (loading) return;

    const cached = productDetails[slug];
    const isValidTTL =
      cached && cached.fetchedAt && Date.now() - cached.fetchedAt < TTL;

    if (!force && isValidTTL) {
      // Already cached & TTL valid
      return;
    }

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getProductDetail(slug); // your API call
      const data = response?.data;

      set((state) => ({
        productDetails: {
          ...state.productDetails,
          [slug]: {
            data,
            fetchedAt: Date.now(),
          },
        },
        loading: false,
      }));
    } catch (err) {
      set({
        error: err?.message || "Failed to fetch product detail",
        loading: false,
      });
    }
  },

  /**
   * Force refresh product detail
   */
  forceRefresh: async (slug) => {
    await get().fetchProductDetail(slug, true);
  },
}));
