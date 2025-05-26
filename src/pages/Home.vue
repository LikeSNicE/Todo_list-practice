<script setup>

import { useRouter } from "vue-router";
import { useLoadingStore } from "../stores/loadingStore";
import { useModalStore } from "../stores/modalStore";
import { useAuthStore } from "../stores/authStore";

import BtnModal from "../components/BtnModal.vue";
import SpinnerLoader from "../components/SpinnerLoader.vue";
import TaskModal from "../components/TaskModal.vue";
import TasksList from "../components/TasksList.vue";
import CategoryModal from "../components/CategoryModal.vue";

import SearchTask from "../components/SearchTask.vue";
import SortTask from "../components/SortTask.vue";
import DescriptionModal from "../components/DescriptionModal.vue";
import TaskFilterSort from "../components/TaskFilterSort.vue";

const loadingStore = useLoadingStore();
const modalStore = useModalStore();
const authStore = useAuthStore();

const isAuthenticated = authStore.authState.isAuthenticated;

const router = useRouter();

if(!isAuthenticated){
  router.push('/auth');
}

</script>
<template>
  <div v-if="isAuthenticated && !loadingStore.isLoading">
    <TaskFilterSort/>
    <TasksList />
    <TaskModal v-if="modalStore.activeModal === 'task'" />
    <CategoryModal v-if="modalStore.activeModal === 'category'" />
    <DescriptionModal v-if="modalStore.activeModal === 'description'"/>
    <BtnModal />
  </div>

  <div v-else>
     <SpinnerLoader/>
  </div>
</template>
