<template>
  <div class="flex container">
    <div class="flex-1">
      <img alt="Vue logo" class="w-1/2 mx-auto" src="@/assets/logo.svg" />
    </div>
    <div class="flex-1">
      <h2 class="text-2xl font-bold text-green-500">What is Vue?</h2>
      <br />
      <p class="text-xl">
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
import { inject, onMounted } from 'vue'

const footer = inject('footer')
onMounted(() => {
  footer.value = false
})
</script>
