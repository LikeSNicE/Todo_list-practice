<script setup lang="ts">
import Header from "./components/Header.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="container mx-auto px-4">
    <Header />
    <main>
      <router-view></router-view>
    </main>
  </div>
</template>

<style scoped></style>
