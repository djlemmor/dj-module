<template>
  <main class="flex flex-col h-screen bg-blue-500 text-white">
    <slot></slot>
    <FooterNav v-show="withFooter" />
  </main>
</template>

<script setup>
import FooterNav from '@/components/footer/FooterNav.vue'
defineProps({
  withFooter: {
    type: Boolean,
    required: true
  }
})
</script>
