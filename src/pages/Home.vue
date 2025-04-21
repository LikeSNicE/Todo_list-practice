<script setup>
import SpinnerLoader from "../components/SpinnerLoader.vue";
import TaskAdd from "../components/TaskAdd.vue";
import TasksList from "../components/TasksList.vue";
import { useLoadingStore } from "../stores/loadingStore";

const store = useLoadingStore();
</script>
<template>
  <div v-if="!store.isLoading">
    <TaskAdd />
    <TasksList />
  </div>

  <div v-else>
    <SpinnerLoader/>  
  </div>
</template>
