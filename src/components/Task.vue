<script setup lang="ts">
import { nextTick, ref, computed } from "vue";
import { useTaskStore } from "../stores/taskStore";

const props = defineProps({
  id: {
    type: Number,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  isDone: {
    type: Boolean,
    required: true,
  },
});

const store = useTaskStore();

const inputTitleRef = ref<HTMLInputElement | null>(null);
const isEditing = ref<boolean>(false);
const editedTitle = ref<string>(props.title);

const isChecked = ref<boolean>(props.isDone);

const isEditMode = async () => {
  isEditing.value = !isEditing.value;

  if (isEditing.value) {
    editedTitle.value = props.title;
    await nextTick();
    inputTitleRef.value?.focus();
  } else {
    saveChanges();
  }
};

// Сохранение изменений
const saveChanges = (): void => {
  const normalizedTitle = editedTitle.value.trim();
  if (normalizedTitle && normalizedTitle !== props.title) {
    store.updateTask(props.id, normalizedTitle);
  } else if (normalizedTitle === "") {
    editedTitle.value = props.title; // Восстанавливаем исходное значение
  }
  isEditing.value = false;
};

const cutTaskTitle = computed((): string => {
  const maxLength = 50;
  if (props.title.length < maxLength) {
    return props.title;
  }
  return props.title.slice(0, maxLength).trim() + "...";
});

const handleCheckbox = (): void => {
  isChecked.value = !isChecked.value;
  store.checkedTask(props.id, isChecked.value);
};
</script>

<template>
  <div
    class="border-2 border-gray-700 my-0 mx-auto flex justify-between items-center px-4 py-3 rounded-[15px] task-pc"
  >
    <div class="flex gap-4">
      <input
        v-model="isChecked"
        @click="handleCheckbox()"
        type="checkbox"
        class="w-[1em]"
      />
      <textarea
        v-if="isEditing"
        ref="inputTitleRef"
        v-model="editedTitle"
        @blur="saveChanges()"
        @keyup.enter="isEditMode()"
        @keyup.escape="isEditing = false"
        class="px-2 w-[25em] min-h-[1.5em] adaptiv-textarea"
      />

      <p
        @click="isEditMode()"
        v-if="!isEditing && !isChecked"
        class="w-[27rem] break-all adaptiv-font"
      >
        {{ cutTaskTitle }}
      </p>
      <del v-if="!isEditing && isChecked">{{ cutTaskTitle }}</del>
    </div>
    <div class="flex gap-6">
      <button
        v-if="isEditing"
        @click="isEditMode()"
        class="cursor-pointer transition-colors duration-300 hover:text-[#655d5d]"
      >
        <i class="fa-regular fa-circle-check fa-lg"></i>
      </button>

      <button
        @click="isEditMode()"
        v-if="!isEditing && !isChecked"
        class="cursor-pointer"
      >
        <i class="fa-solid fa-pen-to-square fa-lg"></i>
      </button>

      <button @click="store.removeTask(props.id)" class="cursor-pointer">
        <i class="fa-solid fa-xmark fa-lg"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-title {
  @media (max-width: 500px) {
    gap: 8px;
    font-size: 14px;
  }
}
.adaptiv-font {
  font-size: clamp(14px, 1.5vw, 16px);

  @media (max-width: 1370px) {
    width: 24rem;
  }

  @media (max-width: 575px) {
    width: 280px;
  }
  @media (max-width: 480px) {
    width: 200px;
  }
  @media (max-width: 400px) {
    width: 140px;
  }
}

.adaptiv-textarea {
  @media (max-width: 580px) {
    width: 20rem;
  }
  @media (max-width: 500px) {
    width: 15rem;
  }
  @media (max-width: 450px) {
    width: 12.5rem;
  }
  @media (max-width: 380px) {
    width: 10rem;
  }
  @media (max-width: 340px) {
    width: 8rem;
  }
}
</style>
