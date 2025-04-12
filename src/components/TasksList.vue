<script setup lang="ts">
import { ref, onMounted } from "vue";
import Task from "./Task.vue";
import api from "../api";
import { type Tasks } from "../types";


const tasks = ref<Tasks[]>([]);


const getAlltask = async () => {
  try {
    const { data } = await api.get('/tasks');
    tasks.value = data;
  } catch (error: any) {
    console.log(error.message);
  }
};

onMounted(getAlltask)
</script>

<template>
  <p class="mt-[2em] text-center font-semibold text-xl" v-if="!tasks.length">
    На данный момент задач не имеется :D
  </p>
  <ul class="mt-[2em] flex flex-col gap-4 justify-center items-center">
    <li class="w-3/5 task-item" v-for="task in tasks">
      <Task :title="task.title" :key="task.id" />
    </li>
  </ul>
</template>

<style scoped lang="scss">
.task-item {
  @media (max-width: 1370px) {
    width: 50%;
  }
  @media (max-width: 1025px) {
    width: 75%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
}
</style>
