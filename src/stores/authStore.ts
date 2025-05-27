import { defineStore } from "pinia";
import { reactive } from "vue";
import { type User } from "../types/types";
import api from "../api";

export const useAuthStore = defineStore("auth", () => {
  const authState = reactive({
    isAuthenticated: !!localStorage.getItem("token"),
  });

  const login = (token: string) => {
    localStorage.setItem("token", token);
    authState.isAuthenticated = true;
  };

  const checkAuth = async (): Promise<User | null> => {
    const token = localStorage.getItem("token");

    try {
      const { data } = await api.get("/auth_me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      return data;
    } catch (error: any) {
      console.log(error.message);
      return null;
    }
  };

  return {
    authState,
    login,
    checkAuth,
  };
});
