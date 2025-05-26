<script setup>
import { useLoadingStore } from "../stores/loadingStore";
const store = useLoadingStore();
</script>

<template>
  <div v-if="store.isLoading" class="loading-overlay">
    <div class="flex flex-col items-center">
      <div class="spinner"></div>
      <div class="text-center mt-4">Загрузка ...</div>
    </div>
  </div>

</template>

<style scoped lang="scss">
  .loading-overlay{
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
  }

  .spinner{
    width: 50px;
    height: 50px;
    border: 5px solid #000;
    border-radius: 50%;
    border-top-color: transparent;
    animation: spin 1s linear infinite;
  }

  @keyframes spin{
    0%{
      transform: rotate(0deg);
    }
    100%{
      transform: rotate(360deg);
    }
  }
</style>
