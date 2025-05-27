<script setup>
  import { useModalStore } from '../stores/modalStore';

  const modalStore = useModalStore();
</script>

<template>
  <div class="fixed right-4 bottom-10  
  md:right-[max(1rem,calc(50%-640px+1rem))]
  btn-modal-wrapper">
    <button
      @click="modalStore.openModal('task')"
      class="relative bg-[#4C75A3] min-w-[50px] h-[50px] rounded-[50%] cursor-pointer text-white transition-colors duration-500 hover:bg-[#0b4283] btn-modal-adaptive"
    >
      <i class="fa-solid fa-plus"></i>
    </button>
  </div>
</template>

<style scoped lang="scss">
.btn-modal-wrapper{
  @media(max-width: 900px){
    position: static;
  }
}

.btn-modal-adaptive{
  @media(max-width: 900px){
    width: 100%;
    min-height: 40px;
    border-radius: 1em;
  }
}
</style>
