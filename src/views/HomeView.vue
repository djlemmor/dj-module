<template>
  <div class="text-center bg-green-500 w-full py-16 align-center">
    <h1 class="uppercase font-bold text-5xl relative py-6 text-black">VUE JS</h1>
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
  </div>
</template>
<script setup>
import { RouterLink } from 'vue-router'
import { inject, onMounted } from 'vue'
const { setMenu } = inject('menu')

const footer = inject('footer')
onMounted(() => {
  footer.value = false
  setMenu()
})
</script>
