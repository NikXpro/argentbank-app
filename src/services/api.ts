import axios from "axios";

const API_URL = "http://localhost:3001/api/v1";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface UserProfile {
  email: string;
  firstName: string;
  lastName: string;
  id: string;
}

export const authService = {
  async login(credentials: LoginCredentials) {
    const response = await api.post("/user/login", credentials);
    if (response.data.body.token) {
      localStorage.setItem("token", response.data.body.token);
    }
    return response.data;
  },

  async getProfile() {
    const response = await api.post("/user/profile");
    return response.data;
  },

  async updateProfile(data: { firstName: string; lastName: string }) {
    const response = await api.put("/user/profile", data);
    return response.data;
  },

  logout() {
    localStorage.removeItem("token");
  },
};
