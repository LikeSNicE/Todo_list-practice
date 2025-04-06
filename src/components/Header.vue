<script setup lang="ts">
  import { RouterLink } from 'vue-router';
</script>

<template>
  <header class="flex pt-4 justify-between items-center header-1025">
    <router-link to="/"><h2 class="text-4xl font-bold custom:text-xl">Todo-List</h2></router-link>
    <router-link class="text-xl" to="/auth">Авторизация</router-link>
  </header>
</template>
