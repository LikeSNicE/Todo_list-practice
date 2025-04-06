<script  setup>
import { ref } from "vue";
import Task from "./Task.vue";

const tasks = ref([
  {
    id: 1,
    title: "Купить продукты",
    isDone: false,
  },
  {
    id: 2,
    title: "Изучить TypeScript",
    isDone: false,
  },
  {
    id: 3,
    title: "Поиграть The Witcher 3 wild hunt",
    isDone: false,
  },
]);
</script>

<template>
  <p
  class="mt-[2em] text-center font-semibold text-xl"
  v-if="!tasks.length">На данный момент задач не имеется :D</p>
  <ul class="mt-[2em] flex flex-col gap-4 justify-center items-center
  ">
    <li class="w-3/5 task-item"  v-for="task in tasks">
      <Task :title="task.title" :key="task.id" />
    </li>
  </ul>
</template>
