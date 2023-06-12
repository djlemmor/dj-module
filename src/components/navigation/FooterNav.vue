<template>
  <footer
    v-show="withFooter"
    class="fixed right-1 bottom-1 flex justify-end items-center text-white"
  >
    <div class="flex">
      <!-- HOME -->
      <div @click="goToHomePage" class="cursor-pointer hover:bg-black hover:bg-opacity-50 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
          class="w-6 h-6"
        >
          <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
          <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
        </svg>
      </div>
      <!-- MENU -->
      <div @click="toggleMenu" class="cursor-pointer hover:bg-black hover:bg-opacity-50 p-1">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#fff"
          stroke-width="1"
          stroke-linecap="square"
          stroke-linejoin="arcs"
          class="w-6 h-6"
        >
          <line x1="3" y1="12" x2="21" y2="12"></line>
          <line x1="3" y1="6" x2="21" y2="6"></line>
          <line x1="3" y1="18" x2="21" y2="18"></line>
        </svg>
      </div>
      <!-- Previous -->
      <div @click="goToPrevPage" class="cursor-pointer hover:bg-black hover:bg-opacity-50 p-1">
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
      <div @click="goToNextPage" class="cursor-pointer hover:bg-black hover:bg-opacity-50 p-1">
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

defineProps({
  withFooter: Boolean
})

const { toggleMenu } = inject('menu')
const { goToHomePage, goToPrevPage, goToNextPage } = inject('page')
</script>
