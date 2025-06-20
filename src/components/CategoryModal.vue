<script setup lang="ts">
import { useModalStore } from "../stores/modalStore";

import { useTaskField } from "../composables/useTaskField";
import Modal from "./ModalLayout.vue";

const modalStore = useModalStore();

const { fieldModal, updateFieldModal } = useTaskField("category");
</script>

<template>
  <Modal>
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">
        {{ $t('categoryModal.titleModal') }}
      </h3>
      <button @click="modalStore.closeModal()" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </template>
    <template #body>
      <input
        v-model="fieldModal"
        class="bg-white border-2 rounded-lg w-full px-4 py-2"
      />
    </template>
    <template #footer>
      <div class="flex justify-end gap-4">
        <button
          class="bg-(--bg-main) text-white p-2 rounded-lg w-[120px] cursor-pointer"
          @click="updateFieldModal"
        >
        {{ $t('categoryModal.buttonName') }}
        </button>
      </div>
    </template>
  </Modal>
</template>
