<template>
  <div class="flex justify-center items-center gap-4 mt-[4em] task-add">
    <input
      placeholder="Записать задачу..."
      class="block w-3/5 min-h-[50px] rounded-[1em] border-2 border-gray-300 px-4 py-2 placeholder-gray-400 shadow-sm focus:outline focus:border-sky-500 task-add-input"
    />
    <button
      class="bg-[#4C75A3] min-w-[50px] h-[50px] rounded-[50%] cursor-pointer text-white"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
.task-add {
  @media (max-width: 768px) {
    justify-content: space-between;
  }
  &-input {
    @media (max-width: 768px) {
      width: 90%;
    }
  }
}
</style>
