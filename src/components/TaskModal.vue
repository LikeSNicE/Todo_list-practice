<script setup>
import { ref, onMounted } from "vue";
import { useModalStore } from "../stores/modalStore";
import { useTaskStore } from "../stores/taskStore";
import Modal from "./ModalLayout.vue";

const modalStore = useModalStore();
const taskStore = useTaskStore();

onMounted(async () => {
  await taskStore.getAllCategories();
});


</script>

<template>
  <Modal>
    <template #header>
      <h3 class="text-xl font-semibold text-gray-900">{{ $t("modalAdd.newTask") }}</h3>
      <button @click="modalStore.closeModal()" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </template>
    <template #body>
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        {{ $t("modalAdd.nameTask") }}
      </h4>
      <input
        v-model="taskStore.inputTitle"
        :placeholder="$t('modalAdd.WriteNameTask')"
        class="block w-full min-h-[50px] rounded-[1em] border-2 border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:outline focus:border-sky-500 task-add-input"
      />
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        {{ $t("modalAdd.descriptionTask") }}
      </h4>
      <textarea
        v-model="taskStore.descriptionTask"
        :placeholder="$t('modalAdd.WriteDescriptionTask')"
        class="block w-full rounded-[1em] px-4 py-2 min-h-[100px] shadow-sm focus:outline focus:border-sky-500  border-2 border-gray-300"
      ></textarea>
      <h4 class="text-lg font-semibold text-gray-900 text-center">
        {{ $t("modalAdd.categoryTask") }}
      </h4>
      <select
        v-model="taskStore.categoryTask"
        class="border-2 border-gray-300 rounded-[1em] p-2 w-full min-h-[50px] shadow-sm focus:border-sky-500"
      >
        <option selected value="">
          {{ $t("modalAdd.withoutCategory") }}
        </option>
        <option
          v-for="category in taskStore.categories"
          :value="category.name"
          :key="category.id"
        >
          {{ category.name }}
        </option>
        <option value="custom">
          {{ $t("modalAdd.otherCategory") }}
        </option>
      </select>
      <h4
        v-if="taskStore.categoryTask === 'custom'"
        class="text-lg font-semibold text-gray-900 text-center"
      >
        {{ $t("modalAdd.otherCategoryTitle") }}
      </h4>
      <input
        v-if="taskStore.categoryTask === 'custom'"
        v-model="taskStore.customCategory"
        type="text"
        class="border-2 border-gray-300 w-full rounded-[1em] py-2 px-4 min-h-[50px] shadow-sm focus:outline focus:border-sky-500"
        :placeholder="$t('modalAdd.writeYourCategory')"
      />
    </template>
    <template #footer>
      <button
        :disabled="
          taskStore.inputTitle.trim() === '' &&
          taskStore.customCategory.trim() === ''
        "
        @click="taskStore.addTask()"
        class="text-white bg-(--bg-main) hover:bg-[#0b4283] rounded-lg text-sm px-5 py-2.5 text-center w-full disabled:cursor-not-allowed disabled:bg-gray-300 disabled:text-black"
      >
        {{ $t("modalAdd.addTask") }}
      </button>
    </template>
  </Modal>
</template>
