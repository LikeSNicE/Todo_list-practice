<script setup lang="ts">
import { useFilterStore } from "../stores/FilterStore";
import { useTaskStore } from "../stores/taskStore";
import {watch} from "vue";

const filterStore = useFilterStore();
const taskStore = useTaskStore();

const onChangeSearchQuery = (event: Event) =>{
  const eventTarget = event.target as HTMLInputElement;
  filterStore.filters.searchQuery = eventTarget.value;
}

watch(() => filterStore.filters.searchQuery, () => {
  taskStore.getAlltask(1);
}, {deep: true})
</script>

<template>
  <div class="relative w-[50%] filter-task-input">
    <img class="absolute top-3 left-3" src="../images/search.svg" />
    <input
      class="border-2 rounded-md py-2 pl-11 pr-4 outline-none focus:border-blue-500 w-full"
      type="text"
      :placeholder="$t('filtersTask.searchTask')"
      @input="onChangeSearchQuery"
    />
  </div>
</template>

<style scoped lang="scss">
  .filter-task-input{
    @media (max-width: 1025px){
      width: 90%;
    }
    @media (max-width: 440px){
      width: 100%;
    }
  }
</style>
