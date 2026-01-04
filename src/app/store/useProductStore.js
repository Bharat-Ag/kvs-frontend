import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

const TTL = 5 * 60 * 1000; // 5 minutes

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,
  fetchedAt: null,

  /**
   * Fetch products from API with optional TTL bypass
   * @param {boolean} force - ignore TTL and fetch fresh data
   */
  fetchProducts: async (force = false) => {
    const { products, fetchedAt, loading } = get();

    if (loading) return;

    const isValidTTL =
      products.length && fetchedAt && Date.now() - fetchedAt < TTL;
    if (!force && isValidTTL) return; // use cached data

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getProducts();
      set({
        products: response?.data || [],
        fetchedAt: Date.now(),
        loading: false,
      });
    } catch (err) {
      set({
        error: err?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  /**
   * Force refresh products ignoring TTL
   */
  forceRefresh: async () => {
    await get().fetchProducts(true);
  },
}));