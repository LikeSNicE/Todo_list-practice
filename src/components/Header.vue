<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <header class="flex pt-4 justify-between items-center header-1025">
    <router-link to="/">
      <img
        class="w-[48px] h-[48px]"
        src="../../public/images/logo-todos.svg"
        alt="logo"
      />
    </router-link>
    <router-link class="text-xl" to="/auth">Авторизация</router-link>
  </header>
</template>
