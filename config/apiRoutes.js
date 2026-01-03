import config from "./config";

const apiRoutes = {
  product: {
    list: `${config.baseUrl}/products`,
    detail: (slug) => `${config.baseUrl}/products/${slug}`,
  },

  blog: {
    list: `${config.baseUrl}/blogs`,
    detail: (slug) => `${config.baseUrl}/blogs/${slug}`,
  },

  dashboard: {
    list: `${config.baseUrl}/dashboard/products`,
  },

  inquiry: {
    create: `${config.baseUrl}/inquiry`,
  },

};

export default apiRoutes;
