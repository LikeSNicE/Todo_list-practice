<script setup>
import SearchTask from "../components/SearchTask.vue";
import SortTask from "../components/SortTask.vue";
</script>

<template>
  <div class="my-6 flex justify-center gap-4 taskfilterSort-adaptiv">
    <SearchTask />
    <SortTask />
  </div>
</template>

<style scoped lang="scss">
.taskfilterSort-adaptiv {
  @media (max-width: 1025px) {
    width: 100%;
    justify-content: space-between;
  }
  @media(max-width: 440px){
    flex-direction: column;
  }
}
</style>
