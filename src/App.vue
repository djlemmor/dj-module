<template>
  <DefaultLayout :withFooter="withFooter">
    <div class="flex-1 flex justify-center items-center">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, provide } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

const router = useRouter()
const withFooter = ref(false)
const currentPage = ref(0)
const duration = ref(5)

const setCurrentPage = (page) => {
  console.log('App.vue setCurrentPage currentPage before', currentPage.value)
  currentPage.value = page
  console.log('App.vue setCurrentPage currentPage after', currentPage.value)
}

const goToNextPage = () => {
  console.log('App.vue nextPage currentPage before', currentPage.value)
  currentPage.value++
  console.log('App.vue nextPage currentPage after', currentPage.value)
  router.push({ name: 'pagecontent', params: { page: currentPage.value } })
}

const goToPrevPage = () => {
  console.log('App.vue nextPage currentPage before', currentPage.value)
  currentPage.value--
  console.log('App.vue nextPage currentPage after', currentPage.value)
  router.push({ name: 'pagecontent', params: { page: currentPage.value } })
}

provide('duration', duration)
provide('footer', withFooter)
provide('page', {
  setCurrentPage,
  goToNextPage,
  goToPrevPage
})
</script>
