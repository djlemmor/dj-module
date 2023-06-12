<template>
  <Transition name="fade" :appear="appear" :mode="mode">
    <slot></slot>
  </Transition>
</template>

<script setup>
defineProps({
  appear: {
    type: Boolean,
    default: false
  },
  mode: {
    type: String,
    default: 'default'
  }
})
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
