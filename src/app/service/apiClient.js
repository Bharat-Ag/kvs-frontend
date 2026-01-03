import axios from "axios";
import config from "../../../config/config";

const apiClient = axios.create({
  baseURL: config.baseUrl,
  timeout: 15000,
});

/* Response interceptor (no auth, no logout) */
apiClient.interceptors.response.use(
  response => response,
  error => {
    // keep logic minimal, don’t be clever
    return Promise.reject(error);
  }
);

export default apiClient;
