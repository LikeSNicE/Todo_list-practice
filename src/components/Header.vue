<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useAuthStore } from "../stores/authStore";
import { useLoginStore } from "../stores/loginStore";
import { useRouter } from "vue-router";

const authStore = useAuthStore();
const loginStore = useLoginStore();
const router = useRouter();

const handleLogOut = () => {
  loginStore.logOutUser();
  router.push("/auth");
};
</script>

<template>
  <header class="flex pt-4 justify-between items-center">
    <div class="">
      <router-link to="/">
        <img
          class="w-[48px] h-[48px]"
          src="../images/logo-todos.svg"
          alt="logo"
        />
      </router-link>
    </div>

    <div class="flex gap-8 items-center">
      <router-link
        v-if="!authStore.authState.isAuthenticated"
        class="text-xl"
        to="/auth"
        >Авторизация</router-link
      >
      <button
        v-if="authStore.authState.isAuthenticated"
        @click="handleLogOut()"
        class="bg-(--delete) text-white py-2 px-2 rounded-lg cursor-pointer"
      >
        Выйти из аккаунта
      </button>
    </div>
  </header>
</template>
