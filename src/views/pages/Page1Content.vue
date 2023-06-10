<template>
  <div
    :class="durationClass"
    class="ease-in fade-in w-full text-4xl font-bold text-center text-yellow-500 uppercase"
  >
    Getting Started
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, inject, computed, ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const duration = inject('duration')
const footer = inject('footer')
const durationClass = computed(() => `duration-${duration.value}000`)
const animationDuration = computed(() => `${duration.value}s`)
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

<style scoped>
.fade-in {
  animation-name: fadeIn;
  animation-duration: v-bind(animationDuration);
}

@keyframes fadeIn {
  from {
    opacity: 100;
  }
  to {
    opacity: 0;
  }
}
</style>
