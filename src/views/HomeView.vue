<template>
  <div class="text-center h-screen flex items-center justify-center">
    <h1
      class="bg-green-500 w-full uppercase font-bold text-4xl xl:text-5xl relative py-16 xl:py-24 text-black"
    >
      VUE JS
    </h1>
    <RouterLink
      :to="{ name: 'introduction' }"
      class="absolute top-1/2 transform -translate-y-1/2 right-1 hover:bg-black hover:bg-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="2"
        stroke="currentColor"
        class="w-10 h-10 stroke-white"
      >
        <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </RouterLink>
  </div>
</template>
<script setup>
import { inject, onMounted } from 'vue'

const footer = inject('footer')
onMounted(() => {
  footer.value = false
})
</script>
