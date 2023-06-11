<template>
  <FadeTransition :mode="'out-in'">
    <component :is="page" :key="pageParams"></component>
  </FadeTransition>
</template>

<script setup>
import { computed, inject, watch, ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import Page1Content from '@/views/pages/Page1Content.vue'
import Page2Content from '@/views/pages/Page2Content.vue'
import Page3Content from '@/views/pages/Page3Content.vue'

const route = useRoute()
const router = useRouter()
const { setCurrentPage } = inject('page')
const pageParams = ref(route.params.page)

const pages = {
  1: Page1Content,
  2: Page2Content,
  3: Page3Content
}

const page = computed(() => {
  const pageComponent = pages[pageParams.value]
  if (!pageComponent) {
    router.replace('/')
  }
  return pageComponent
})

onMounted(() => {
  setCurrentPage(Number(pageParams.value))
})

watch(
  () => route.params.page,
  (newPage) => {
    pageParams.value = Number(newPage)
    setCurrentPage(pageParams.value)
  }
)
</script>
