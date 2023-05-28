<template>
  <DefaultLayout :withFooter="withFooter">
    <div class="flex-1 flex justify-center items-center">
      <RouterView />
    </div>
  </DefaultLayout>
</template>

<script setup>
import { ref, provide } from 'vue'
import { RouterView } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'

const withFooter = ref(false)
const currentPage = ref(1)
const maximumPageNumber = ref(21)
const duration = ref(5)

const pageNext = () => {
  if (currentPage.value < maximumPageNumber.value) {
    currentPage.value++
  }
  console.log('maximumPageNumber', maximumPageNumber.value)
  console.log('currentPage', currentPage.value)
}

provide('duration', duration)
provide('page', pageNext)
provide('footer', withFooter)
</script>
