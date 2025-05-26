<script setup lang="ts">
import { useFilterStore } from "../stores/FilterStore";
import { useTaskStore } from "../stores/taskStore";
import { watch } from "vue";

const filterStore = useFilterStore();
const taskStore = useTaskStore();

const onChangeSelect = (event: Event) => {
  const eventTarget = event.target as HTMLInputElement;
  filterStore.filters.sortBy = eventTarget.value;
};

watch(
  () => filterStore.filters.sortBy,
  () => {
    taskStore.getAlltask();
  },
  { deep: true }
);
</script>

<template>
  <select
    @change="onChangeSelect"
    class="border rounded-md outline-none bg-(--bg-main) text-white sort-task-select"
  >
    <option class="bg-white text-black" value="">Без сортировки</option>
    <option class="bg-white text-black" value="title">По названию</option>
    <option class="bg-white text-black" value="-isDone">Завершенные</option>
    <option class="bg-white text-black" value="isDone">Не завершенные</option>
  </select>
</template>

<style scoped lang="scss">
  .sort-task-select{
    @media(max-width: 440px){
      min-height: 44px;
    }
  }
</style>
