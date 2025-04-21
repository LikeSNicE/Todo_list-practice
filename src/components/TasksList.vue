<script setup lang="ts">
import { onMounted } from "vue";
import Task from "./Task.vue";
import { useTaskStore } from "../stores/taskStore";

const store = useTaskStore();

onMounted(async () => {
  await store.getAlltask();
});
</script>

<template>
  <p
    class="mt-[2em] text-center font-semibold text-xl"
    v-if="!store.tasks.length"
  >
    На данный момент задач не имеется :D
  </p>
  <ul class="mt-[2em] flex flex-col gap-4 justify-center items-center">
    <li class="w-2/5 task-item" v-for="task in store.tasks" :key="task.id">
      <Task :id="task.id" :title="task.title" :isDone="task.isDone" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.task-item {
  @media (max-width: 1370px) {
    width: 65%;
  }
  @media (max-width: 1025px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
