<template>
  <FadeTransition :appear="true">
    <div
      class="h-screen flex items-center justify-center flex-col gap-8 p-12 container mx-auto xl:gap-0 xl:flex-row"
    >
      <div class="flex-1 flex justify-center">
        <img alt="Vue logo" class="w-1/2" src="@/assets/logo.svg" />
      </div>
      <div class="flex-1">
        <h2 class="text-xl xl:text-2xl text-center xl:text-left font-bold text-green-500 mb-4">
          What is Vue?
        </h2>
        <p class="xl:text-xl">
          Vue (pronounced /vju:/, like view) is a JavaScript framework for building user interfaces.
          It builds on top of standard HTML, CSS, and JavaScript and provides a declarative and
          component-based programming model that helps you efficiently develop user interfaces, be
          they simple or complex.
        </p>
      </div>
      <RouterLink
        :to="{ name: 'pagecontent', params: { page: 1 } }"
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
  </FadeTransition>
</template>

<script setup>
import { inject, onMounted } from 'vue'

const footer = inject('footer')
onMounted(() => {
  footer.value = false
})
</script>
