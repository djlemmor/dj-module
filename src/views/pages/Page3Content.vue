<template>
  <div>Page 3 Content</div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
const footer = inject('footer')
onMounted(() => {
  footer.value = true
})
</script>