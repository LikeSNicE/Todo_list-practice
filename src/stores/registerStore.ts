import { defineStore } from "pinia";
import { ref } from "vue";
import { useLoadingStore } from "./loadingStore";
import api from "../api";


export const useRegisterStore = defineStore("register", () => {
  const loadingStore = useLoadingStore();

  const userEmail = ref("");
  const userPassword = ref("");

  const registerUser = async () => {
    try {
      loadingStore.startLoading();
      const response = await api.post("/register", {
        email: userEmail.value,
        password: userPassword.value,
      });

      localStorage.setItem("token", response.data.token);
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
