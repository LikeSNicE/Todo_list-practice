<script setup>
  import { useModalStore } from '../stores/modalStore';

  const modalStore = useModalStore();
</script>

<template>
  <div class="fixed right-4 bottom-10  
  md:right-[max(1rem,calc(50%-640px+1rem))]
  ">
    <button
      @click="modalStore.openModal('task')"
      class="relative bg-[#4C75A3] min-w-[50px] h-[50px] rounded-[50%] cursor-pointer text-white transition-colors duration-500 hover:bg-[#0b4283]"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>
