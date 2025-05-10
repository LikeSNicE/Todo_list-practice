import { defineStore } from "pinia";
import api from "../api";
import { ref } from "vue";
import { type Task as TaskType, type Category } from "../types/types";
import getData from "../generics/getDataGeneric";
import { useLoadingStore } from "./loadingStore";
import { useModalStore } from "./modalStore";

export const useTaskStore = defineStore("task", () => {
  const loading = useLoadingStore();
  const modalStore = useModalStore();

  const tasks = ref<TaskType[]>([]);
  const task = ref<TaskType | null>(null);

  const inputTitle = ref("");
  const categoryTask = ref("");
  const customCategory = ref("");
  const categories = ref<Category[]>([]);

  const getTask = async (id: number) => {
    const taskData = await getData<TaskType>(`/tasks/${id}`);
    task.value = taskData;
  };

  const getAlltask = async () => {
    const tasksData = await getData<TaskType[]>("/tasks");
    tasks.value = tasksData;
  };

  const getAllCategories = async () => {
    const categoriesData = await getData<Category[]>("/categories");
    categories.value = categoriesData;
  };

  const addTask = async () => {
    if (inputTitle.value.trim() === "") return;

    const category =
      categoryTask.value === "custom"
        ? customCategory.value
        : categoryTask.value;

    try {
      loading.startLoading();
      const { data } = await api.post("/tasks", {
        title: inputTitle.value,
        isDone: false,
        category: category || "",
      });

      if (categoryTask.value === "custom" && customCategory.value) {
        try {
          const { data: newCategory } = await api.post("/categories", {
            name: customCategory.value,
          });
          categories.value.push(newCategory);
        } catch (error: any) {
          console.log(error.message);
        }
      }

      tasks.value.push(data);

      modalStore.activeModal = "";
      inputTitle.value = "";
      categoryTask.value = "";
      customCategory.value = "";
    } catch (error: any) {
      console.log(error.message);
    } finally {
      loading.stopLoading();
    }
  };

  const removeTask = async (id: number) => {
    try {
      loading.startLoading();

      await api.delete(`/tasks/${id}`);
      const filteredTasks = tasks.value.filter((task) => task.id !== id);
      tasks.value = filteredTasks;
    } catch (error: any) {
      console.log(error.message);
    } finally {
      loading.stopLoading();
    }
  };

  const updateTaskField = async <Key extends keyof TaskType>(
    id: number,
    field: Key,
    value: TaskType[Key]
  ): Promise<TaskType | undefined> => {
    try {
      loading.startLoading();
      await api.patch(`/tasks/${id}`, { [field]: value });

      const task = tasks.value.find((task) => task.id === id);
      if (task) {
        task[field] = value;
      }
    } catch (error: any) {
      console.error(`Failed to update ${field}:`, error.message);
      return undefined;
    } finally {
      loading.stopLoading();
    }
  };

  return {
    task,
    tasks,
    categories,
    inputTitle,
    categoryTask,
    customCategory,
    getAlltask,
    getAllCategories,
    getTask,
    addTask,
    removeTask,
    updateTaskField,
  };
});
