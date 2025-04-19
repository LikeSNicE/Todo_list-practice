import { defineStore } from "pinia";
import api from "../api";
import { ref, type Ref } from "vue";
import { type Task as TaskType } from "../types";
import { useLoadingStore } from "./loadingStore";

export const useTaskStore = defineStore("task", () => {
  const loading = useLoadingStore();

  const tasks = ref<TaskType[]>([]);
  const inputTitle: Ref<string> = ref("");

  const getAlltask = async () => {
    try {
      const { data } = await api.get("/tasks");
      tasks.value = data;
    } catch (error: any) {
      console.log(error.message);
    }
  };

  const addTask = async () => {
    if (inputTitle.value.trim() === "") return;

    try {
      loading.startLoading();
      const { data } = await api.post("/tasks", {
        title: inputTitle.value,
        isDone: false,
      });
      tasks.value.push(data);
      inputTitle.value = "";
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
      tasks.value.filter((task) => task.id !== id);
    } catch (error: any) {
      console.log(error.message);
    } finally {
      loading.stopLoading();
    }
  };

  const updateTask = async (id: number, newTitle: string) => {
    try {
      loading.startLoading();
      await api.patch(`/tasks/${id}`, { title: newTitle });
      const task = tasks.value.find((task) => task.id === id);
      if (task) {
        task.title = newTitle;
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      loading.stopLoading();
    }
  };

  const checkedTask = async (id: number, doneTask: boolean = false) => {
    try {
      loading.startLoading();
      await api.patch(`/tasks/${id}`, { isDone: doneTask });
      const task = tasks.value.find((task) => task.id === id);
      if (task) {
        task.isDone = doneTask;
      }
    } catch (error: any) {
      console.log(error.message);
    } finally {
      loading.stopLoading();
    }
  };

  return {
    tasks,
    inputTitle,
    getAlltask,
    addTask,
    removeTask,
    updateTask,
    checkedTask,
  };
});
