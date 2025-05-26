<script setup>
import ModalLayout from "./ModalLayout.vue";
import { useModalStore } from "../stores/modalStore";
import { useTaskField } from "../composables/useTaskField";

const modalStore = useModalStore();
const { fieldModal, updateField } = useTaskField("description")

</script>

<template>
  <ModalLayout>
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">
        Редактирование описание задачи
      </h3>
      <button @click="modalStore.closeModal()" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </template>
    <template #body>
      <textarea
      v-model="fieldModal"
      class="bg-white border-2 rounded-lg w-full px-4 py-2 min-h-[150px]"></textarea>
    </template>
    <template #footer>
      <div class="flex justify-end gap-4">
        <button
          class="bg-(--bg-main) text-white p-2 rounded-lg w-[120px] cursor-pointer"
          @click="updateField"
        >
          Изменить
        </button>
      </div>
    </template>
  </ModalLayout>
</template>
