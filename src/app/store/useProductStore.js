import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

export const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  /**
   * Fetch products from API
   * Always fetches fresh data
   */
  fetchProducts: async () => {
    const { loading } = get();

    // prevent duplicate parallel calls
    if (loading) return;

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getProducts();

      set({
        products: response?.data || [],
        loading: false,
      });
    } catch (err) {
      set({
        error: err?.message || "Failed to fetch products",
        loading: false,
      });
    }
  },

  forceRefresh: async () => {
    await get().fetchProducts();
  },
}));