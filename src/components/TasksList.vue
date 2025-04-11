<script setup>
import { ref, onMounted } from "vue";
import Task from "./Task.vue";
import axios from "axios";
import { base_url } from "../api/Baseapi";

const tasks = ref([]);

const getAlltask = async () => {
  try {
    const { data } = await axios.get(`${base_url}/tasks`);
    tasks.value = data;
  } catch (error) {
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
