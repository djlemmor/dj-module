<template>
  <div class="h-screen flex flex-col p-12">
    <h1 class="w-full uppercase font-bold text-4xl xl:text-5xl py-4 text-center text-yellow-500">
      ABOUT US
    </h1>
    <p class="lg:text-lg py-4">
      Welcome to <span class="text-green-500">DJmodule</span>! <br /><br />
      At <span class="text-green-500">DJmodule</span>, we believe that learning should be accessible
      and tailored to individual interests. We are a comprehensive module site that covers a wide
      range of topics, ensuring that there's something for everyone. <br /><br />
      Our platform is designed to provide you with a seamless learning experience. Whether you're a
      student looking to expand your knowledge, a professional aiming to upskill, or simply a
      curious individual seeking new insights, we've got you covered.
      <br /><br />
      What sets us apart is our diverse selection of modules. We understand that everyone has unique
      interests and learning preferences. That's why we offer an extensive collection of modules,
      each focused on a specific topic or subject area. From art and literature to science and
      technology, our modules encompass a broad spectrum of subjects to cater to your intellectual
      curiosity.
      <br /><br />
      We invite you to explore our website and embark on your learning adventure. Discover
      fascinating topics, expand your horizons, and acquire valuable knowledge that will empower you
      in your personal and professional pursuits.
      <br /><br />
      Thank you for joining us on this educational journey. We look forward to being your trusted
      source of knowledge and inspiration.
    </p>
    <div
      @click="goToHomePage"
      class="fixed bottom-1 right-1 p-2 cursor-pointer hover:bg-black hover:bg-opacity-50"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#fff"
        stroke-width="2"
        stroke-linecap="square"
        stroke-linejoin="arcs"
        class="w-6 h-6"
      >
        <path d="M20 9v11a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V9" />
        <path d="M9 22V12h6v10M2 10.6L12 2l10 8.6" />
      </svg>
    </div>
  </div>
</template>
<script setup>
import { inject, onMounted } from 'vue'

onMounted(() => {
  footer.value = false
})

const footer = inject('footer')
const { goToHomePage } = inject('page')
</script>
