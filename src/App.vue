<template>
  <DefaultLayout>
    <RouterView />
  </DefaultLayout>
  <FooterNav :withFooter="withFooter" />
  <SidebarNav :menu="menu" />
</template>

<script setup>
import { ref, provide } from 'vue'
import { RouterView, useRouter } from 'vue-router'
import DefaultLayout from '@/components/layout/DefaultLayout.vue'
import FooterNav from '@/components/navigation/FooterNav.vue'
import SidebarNav from '@/components/navigation/SidebarNav.vue'

const router = useRouter()
const withFooter = ref(false)
const currentPage = ref(0)
const duration = ref(5)
const menu = ref('-translate-x-96')

const setCurrentPage = (page) => {
  currentPage.value = page
}

const goToHomePage = () => {
  currentPage.value = 0
  setMenu()
  router.push({ name: 'home' })
}

const goToNextPage = () => {
  currentPage.value++
  setMenu()
  router.push({ name: 'pagecontent', params: { page: currentPage.value } })
}

const goToPrevPage = () => {
  currentPage.value--
  setMenu()
  router.push({ name: 'pagecontent', params: { page: currentPage.value } })
}

const setMenu = () => {
  menu.value = '-translate-x-96'
}

const toggleMenu = () => {
  menu.value = menu.value === '-translate-x-96' ? 'translate-x-0' : '-translate-x-96'
};

provide('duration', duration)
provide('footer', withFooter)
provide('page', {
  setCurrentPage,
  goToHomePage,
  goToNextPage,
  goToPrevPage
})
provide('menu', {
  setMenu,
  toggleMenu
})
</script>
