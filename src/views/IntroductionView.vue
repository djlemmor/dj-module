<template>
  <div class="flex gap-10 relative w-full justify-center">
    <div class="bg-black flex-1">Module Image</div>
    <div class="bg-red-500 flex-1">Module Introducton</div>
    <RouterLink
      :to="{ name: 'page1content' }"
      class="absolute top-1/2 transform -translate-y-1/2 right-1 hover:bg-black hover:bg-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-10 h-10 stroke-white"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
import { inject, onMounted } from 'vue'

const footer = inject('footer')
onMounted(() => {
  footer.value = false
})
</script>
