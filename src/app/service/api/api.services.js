import apiClient from "../apiClient";
import apiRoutes from "../../../../config/apiRoutes";

const ApiService = {
  /* -------- PRODUCTS -------- */
  async getProducts() {
    return apiClient.get(apiRoutes.product.list).then(res => res.data);
  },

  async getProductDetail(slug) {
    return apiClient.get(apiRoutes.product.detail(slug)).then(res => res.data);
  },

  /* -------- BLOGS -------- */
   async getBlogs() {
    return apiClient.get(apiRoutes.blog.list).then(res => res.data);
  },

   async getBlogDetail(slug) {
    return apiClient.get(apiRoutes.blog.detail(slug)).then(res => res.data);
  },

  /* -------- DASHBOARD -------- */
   async getDashboardProducts() {
    return apiClient.get(apiRoutes.dashboard.list).then(res => res.data);
  },

  /* -------- INQUIRY -------- */
  async submitInquiry(data) {
    return apiClient.post(apiRoutes.inquiry.create, data).then(res => res.data);
  },
};

export default ApiService;
