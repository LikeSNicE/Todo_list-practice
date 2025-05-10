import { defineStore } from "pinia";
import { ref } from "vue";
import { useLoadingStore } from "./loadingStore";
import { useRouter } from "vue-router";
import api from "../api";

export const useRegisterStore = defineStore("register", () => {
  const loadingStore = useLoadingStore();

  const userEmail = ref("");
  const userPassword = ref("");

  const router = useRouter();

  const registerUser = async (): Promise<void> => {
    try {
      loadingStore.startLoading();
      const response = await api.post("/register", {
        email: userEmail.value,
        password: userPassword.value,
      });

      localStorage.setItem("token", response.data.token);
      router.push("/auth");
      userEmail.value = "";
      userPassword.value = "";

      console.log(response.data.token);
    } catch (error: any) {
      if (error.response) {
        console.error("Ошибка регистрации:", error.response.data);
      } else {
        console.error("Ошибка подключения:", error);
      }
    } finally {
      loadingStore.stopLoading();
    }
  };

  return {
    userEmail,
    userPassword,
    registerUser,
  };
});
