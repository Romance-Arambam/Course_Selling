import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3000/api/v1", // Base URL for your backend API
});

// Add an interceptor to attach the token to every request, if available
API.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default API;
