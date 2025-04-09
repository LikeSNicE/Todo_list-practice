<script setup>
const props = defineProps({
  title: {
    type: String,
    required: true,
  },
});
</script>

<template>
  <div
    class="border-2 border-gray-700 my-0 mx-auto flex justify-between items-center px-4 py-3 rounded-[15px] task-pc w-full"
  >
    <div class="flex gap-4 task-title">
      <input type="checkbox" />
      <p>{{ props.title }}</p>
    </div>
    <div class="flex gap-4">
      <button class="cursor-pointer">
        <i class="fa-solid fa-pen-to-square"></i>
      </button>
      <button class="cursor-pointer">
        <i class="fa-solid fa-xmark"></i>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-title {
  @media (max-width: 500px) {
    gap: 8px;
    font-size: 14px;
    font-weight: bold;
  }
}
</style>
