<script setup>
import { ref, onMounted } from "vue";
import { useModalStore } from "../stores/modalStore";
import { useTaskStore } from "../stores/taskStore";
import Modal from "./ModalLayout.vue";

const modalStore = useModalStore();
const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.getAllCategories();
});


</script>

<template>
  <Modal>
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">Новая задача</h3>
      <button @click="modalStore.closeModal()" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </template>
    <template #body>
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        название задачи
      </h4>
      <input
        v-model="taskStore.inputTitle"
        placeholder="Введите задачу..."
        class="block w-full min-h-[50px] rounded-[1em] border-2 border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:outline focus:border-sky-500 task-add-input"
      />
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        описание задачи
      </h4>
      <textarea
        v-model="taskStore.descriptionTask"
        placeholder="введите описание задачи"
        class="block w-full rounded-[1em] px-4 py-2 min-h-[100px] shadow-sm focus:outline focus:border-sky-500  border-2 border-gray-300"
      ></textarea>
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        категория задачи
      </h4>
      <select
        v-model="taskStore.categoryTask"
        class="border-2 border-gray-300 rounded-[1em] p-2 w-full min-h-[50px] shadow-sm focus:border-sky-500"
      >
        <option selected value="">Без категории</option>
        <option
          v-for="category in taskStore.categories"
          :value="category.name"
          :key="category.id"
        >
          {{ category.name }}
        </option>
        <option value="custom">Другое</option>
      </select>
      <h4
        v-if="taskStore.categoryTask === 'custom'"
        class="text-lg font-semibold text-gray-900 text-center"
      >
        другая категория задачи
      </h4>
      <input
        v-if="taskStore.categoryTask === 'custom'"
        v-model="taskStore.customCategory"
        type="text"
        class="border-2 border-gray-300 w-full rounded-[1em] py-2 px-4 min-h-[50px] shadow-sm focus:outline focus:border-sky-500"
        placeholder="Запишите свою категорию..."
      />
    </template>
    <template #footer>
      <button
        :disabled="
          taskStore.inputTitle.trim() === '' &&
          taskStore.customCategory.trim() === ''
        "
        @click="taskStore.addTask()"
        class="text-white bg-(--bg-main) hover:bg-[#0b4283] rounded-lg text-sm px-5 py-2.5 text-center w-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black"
      >
        Добавить Задачу
      </button>
    </template>
  </Modal>
</template>
