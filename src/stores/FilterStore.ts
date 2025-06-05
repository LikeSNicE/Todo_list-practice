import { defineStore } from "pinia";
import { reactive } from "vue";

export const useFilterStore = defineStore('filter', () => {
  const filters = reactive({
    searchQuery: '',
    sortBy: ''
  })

  return {
    filters,
  };
})
