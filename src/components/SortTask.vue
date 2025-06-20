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
    taskStore.getAlltask(1);
  },
  { deep: true }
);
</script>

<template>
  <select
    @change="onChangeSelect"
    class="border rounded-md outline-none bg-(--bg-main) text-white sort-task-select"
  >
    <option class="bg-white text-black" value="">
      {{ $t("sortTask.withoutSort") }}
    </option>
    <option class="bg-white text-black" value="title">
      {{ $t("sortTask.byName") }}
    </option>
    <option class="bg-white text-black" value="-isDone">
      {{ $t("sortTask.finished") }}
    </option>
    <option class="bg-white text-black" value="isDone">
      {{ $t("sortTask.unfinished") }}
    </option>
  </select>
</template>

<style scoped lang="scss">
.sort-task-select {
  @media (max-width: 440px) {
    min-height: 44px;
  }
}
</style>
