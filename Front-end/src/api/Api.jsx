import axios from "axios";
import { toast } from "react-hot-toast";


// api and axios instance
const api = axios.create({
  baseURL: "http://localhost:8080/api",
  headers: {
    "Content-Type": "application/json",
  },
  timeout: 10000,
});

// Add a request interceptor
api.interceptors.request.use(
  (config) => {
    return config; // request config
  },
  (error) => {
    const message = error.response?.data?.message || "Network error";
    toast.error(message);
    return Promise.reject(error);
  }
);


// token function
export function setAuthToken(token) {
    if (token) {
        api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    }
    else {
        delete api.defaults.headers.common['Authorization'];
    }
}

export default api;