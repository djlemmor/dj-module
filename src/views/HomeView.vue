<template>
  <div class="text-center bg-blue-600 w-full py-16 align-center">
    <h1 class="uppercase font-bold text-3xl relative py-6">
      Module Name
      <RouterLink
        :to="{ name: 'introduction' }"
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
    </h1>
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
