<template>
  <div class="w-full text-4xl font-bold text-center text-yellow-500 uppercase my-auto">
    Getting Started
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, inject, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const duration = inject('duration')
const footer = inject('footer')
const timeout = ref()

onMounted(() => {
  footer.value = false
  timeout.value = setTimeout(() => {
    router.push({ name: 'pagecontent', params: { page: 2 } })
  }, duration.value + '000')
})

onUnmounted(() => {
  clearTimeout(timeout.value)
})
</script>
