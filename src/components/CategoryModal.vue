<script setup lang="ts">
import { computed } from "vue";
import { useModalStore } from "../stores/modalStore";
import { useTaskStore } from "../stores/taskStore";
import Modal from "./Modal.vue";

const modalStore = useModalStore();
const taskStore = useTaskStore();

const handleUpdateCategory = async () => {
  if (taskStore.task) {
    await taskStore.updateTaskField(
      taskStore.task.id,
      "category",
      taskStore.task.category
    );
    modalStore.closeModal();
  }
};

const categoryModel = computed({
  get() {
    return taskStore.task ? taskStore.task.category : "";
  },
  set(val) {
    if (taskStore.task) {
      taskStore.task.category = val;
    }
  },
});
</script>

<template>
  <Modal>
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">
        Редактирование категории
      </h3>
      <button @click="modalStore.closeModal()" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </template>
    <template #body>
      <input
        ref="inputCategoryName"
        v-model="categoryModel"
        class="bg-white border-2 rounded-lg w-full px-4 py-2"
      />
    </template>
    <template #footer>
      <div class="flex justify-end gap-4">
        <button
          class="bg-(--bg-main) text-white p-2 rounded-lg w-[120px] cursor-pointer"
          @click="handleUpdateCategory"
        >
          Изменить
        </button>
      </div>
    </template>
  </Modal>
</template>
