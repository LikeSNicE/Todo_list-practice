import { defineStore } from "pinia";
import { ref } from "vue";

export const useModalStore = defineStore("modal", () => {
  const activeModal = ref('');

  const openModal = (modaltype: string): void => {
    activeModal.value = modaltype;
  };

  const closeModal = (): void => {
    activeModal.value = '';
  };

  return {
    activeModal,
    openModal,
    closeModal,
  };
});
