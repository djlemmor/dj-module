<template>
  <div :class="durationClass" class="ease-in fade-in w-full text-center">Page 1 Content</div>
</template>

<script setup>
import { onMounted, inject, computed } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const duration = inject('duration')
const footer = inject('footer')
const durationClass = computed(() => `duration-${duration.value}000`)
const animationDuration = computed(() => `${duration.value}s`)

onMounted(() => {
  footer.value = false
  setTimeout(() => {
    router.push({ name: 'pagecontent', params: { page: 2 } })
  }, duration.value + '000')
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
