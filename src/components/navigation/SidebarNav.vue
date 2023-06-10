<template>
  <div 
    :class="menu" 
    class="fixed top-0 left-0 h-screen font-bold w-96 p-6 bg-gray-100 transition-transform"
  >
    <h2 class="text-2xl font-bold mb-2">
      <RouterLink
        :to="{ name: 'home' }"
        class="cursor-pointer hover:opacity-50"
      >
        VUE JS
      </RouterLink>
    </h2>
    <ul class="text-lg text-yellow-500">
      <li>
        <RouterLink
          :to="{ name: 'introduction' }"
          class="cursor-pointer hover:opacity-50"
        >
          Introduction
        </RouterLink>
      </li>
      <li>
        <RouterLink
          :to="{ name: 'pagecontent', params: { page: 1 } }"
          class="cursor-pointer hover:opacity-50"
        >
          Getting Started
        </RouterLink>
      </li>
        <ul class="text-base text-green-500 font-normal ml-4">
          <li>
            <RouterLink
              :to="{ name: 'pagecontent', params: { page: 2 } }"
              class="cursor-pointer hover:opacity-50"
            >
              The Progressive Framework
            </RouterLink>
          </li>
        </ul>
      <li>Section</li>
        <ul class="text-base text-green-500 font-normal ml-4">
          <li>Title</li>
          <li>Title</li>
          <li>Title</li>
        </ul>
    </ul>
  </div>
</template>

<script setup>
defineProps({
  menu: String,
})
</script>