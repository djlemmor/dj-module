<template>
  <footer class="h-16 flex justify-end items-center">
    <div class="flex">
      <!-- Previous -->
      <div @click="goToPrevPage" class="cursor-pointer hover:bg-black hover:bg-opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </div>
      <!-- Next -->
      <div @click="goToNextPage" class="cursor-pointer hover:bg-black hover:bg-opacity-50">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-6 h-6"
        >
          <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { inject } from 'vue'
const { goToPrevPage, goToNextPage } = inject('page')
</script>
