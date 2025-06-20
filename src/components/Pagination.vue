<script setup lang="ts">
import { type PaginationProps } from '../types/types';

const props = defineProps<PaginationProps>();
</script>

<template>
  <div class="flex gap-2 justify-center mt-4 mb-4">
    <button
    v-for="page in props.totalPages"
    :key="page"
    :class="[
      'px-3 py-1 rounded-[50%] cursor-pointer transition',
      page === props.currentPage ? 'bg-blue-500 text-white' : 'bg-gray-200'
    ]"
    @click="props.onPageChange(page)"
    >
      {{ page }}
    </button>
  </div>
</template>
