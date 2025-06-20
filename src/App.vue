<script setup lang="ts">
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import { RouterView } from "vue-router";
</script>

<template>
  <div class="min-h-screen flex flex-col">
    <div class="container mx-auto px-4 flex-grow flex-col">
      <Header />
      <main class="flex-grow">
        <router-view></router-view>
      </main>
    </div>
    <Footer />
  </div>
</template>

<style scoped></style>
