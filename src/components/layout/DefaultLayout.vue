<template>
  <main class="flex flex-col h-screen bg-blue-500 text-white">
    <slot></slot>
    <footer class="h-16 flex justify-end items-center" v-if="withFooter">
      <div class="flex">
        <!-- Previous -->
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
        <!-- Next -->
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
    </footer>
  </main>
</template>

<script setup>
defineProps({
  withFooter: {
    type: Boolean,
    required: true
  }
})
</script>
