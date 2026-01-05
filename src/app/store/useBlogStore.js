import { create } from "zustand";
import ApiService from "@/app/service/api/api.services";

export const useBlogStore = create((set, get) => ({
  blogs: [],
  loading: false,
  error: null,

  /**
   * Fetch blogs from API
   * Always fetches fresh data on every call
   */
  fetchBlogs: async () => {
    const { loading } = get();

    // prevent duplicate requests
    if (loading) return;

    set({ loading: true, error: null });

    try {
      const response = await ApiService.getBlogs();

      set({
        blogs: response?.data || [],
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
   * Manual refresh (same as fetch now)
   */
  forceRefresh: async () => {
    await get().fetchBlogs();
  },
}));