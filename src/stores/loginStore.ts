import { ref } from "vue";
import { defineStore } from "pinia";
import { useAuthStore } from "./authStore";
import { useRouter } from "vue-router";
import api from "../api";
import { useLoadingStore } from "./loadingStore";

export const useLoginStore = defineStore("login", () => {
  const loadingStore = useLoadingStore();

  const authStore = useAuthStore();
  const email = ref("");
  const password = ref("");

  const router = useRouter();

  const loginUser = async (): Promise<void> => {
    try {
      loadingStore.startLoading();
      const response = await api.post(
        `/auth`,
        {
          email: email.value,
          password: password.value,
        },
        {
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        const token = response.data.token;
        authStore.login(token);

        const userData = await authStore.checkAuth();

        if (userData) {
          alert("Вы успешно вошли в систему");
          router.push("/");
          email.value = "";
          password.value = "";
        }
      } else {
        alert("Ошибка авторизации.");
      }
    } catch (error: any) {
      if (error.response) {
        alert(
          `Ошибка авторизации: ${
            error.response.data.message || error.response.statusText
          }`
        );
      } else {
        alert("Произошла ошибка. Проверьте подключение к серверу.");
      }
    } finally {
      loadingStore.stopLoading();
    }
  };

  const logOutUser = (): void => {
    localStorage.removeItem("token");
    authStore.authState.isAuthenticated = false;
  };

  return {
    email,
    password,
    loginUser,
    logOutUser,
  };
});
