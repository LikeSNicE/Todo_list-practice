import { computed } from "vue";
import { useTaskStore } from "../stores/taskStore";
import { useModalStore } from "../stores/modalStore";
import { type TaskField } from "../types/types";

export const useTaskField = (field: TaskField) => {
  const taskStore = useTaskStore();
  const modalStore = useModalStore();

  const fieldModal = computed({
    get() {
      return taskStore.task ? taskStore.task[field] : "";
    },
    set(val: string) {
      if (taskStore.task) {
        taskStore.task[field] = val;
      }
    },
  });

  const updateField = async () => {
    if (taskStore.task) {
      await taskStore.updateTaskField(
        taskStore.task.id,
        field,
        taskStore.task[field]
      );
      modalStore.closeModal();
    }
  };

  return { fieldModal, updateField };
};
