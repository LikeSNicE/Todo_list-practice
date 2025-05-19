<script setup>
import { useLoadingStore } from "../stores/loadingStore";
import { useModalStore } from "../stores/modalStore";
import { useAuthStore } from "../stores/authStore";

import BtnModal from "../components/BtnModal.vue";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import TaskModal from "../components/TaskModal.vue";
import TasksList from "../components/TasksList.vue";
import CategoryModal from "../components/CategoryModal.vue";

const loadingStore = useLoadingStore();
const modalStore = useModalStore();
const authStore = useAuthStore();

const isAuthenticated = authStore.authState.isAuthenticated;
</script>
<template>
  <div v-if="isAuthenticated && !loadingStore.isLoading">
    <TasksList />
    <TaskModal v-if="modalStore.activeModal === 'task'" />
    <CategoryModal v-if="modalStore.activeModal === 'category'" />
    <BtnModal />
  </div>

  <div v-else>
    <SpinnerLoader />
  </div>
</template>
