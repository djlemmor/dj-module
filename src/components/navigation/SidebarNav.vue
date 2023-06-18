<template>
  <div
    :class="menuTransition"
    class="fixed top-0 left-0 h-full font-bold w-96 p-6 bg-gray-100 transition-transform"
  >
    <h2 class="text-2xl font-bold mb-2">
      <RouterLink
        :to="{ name: 'home' }"
        class="cursor-pointer hover:opacity-50"
        @click="setMenuTransition"
      >
        VUE JS
      </RouterLink>
    </h2>
    <ul class="text-lg text-yellow-500">
      <li v-for="link in links" :key="link.label">
        <RouterLink
          :to="link.route ? link.route : {}"
          class="cursor-pointer hover:opacity-50"
          @click="setMenuTransition"
        >
          {{ link.label }}
        </RouterLink>
        <ul v-if="link.sublinks" class="text-base text-green-500 font-normal ml-4">
          <li v-for="sublink in link.sublinks" :key="sublink.label">
            <RouterLink
              :to="sublink.route ? sublink.route : {}"
              class="cursor-pointer hover:opacity-50"
              @click="setMenuTransition"
            >
              {{ sublink.label }}
            </RouterLink>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { inject } from 'vue'

defineProps({
  menuTransition: String
})

const { setMenuTransition } = inject('menu')
const links = [
  {
    label: 'Introduction',
    route: { name: 'introduction' }
  },
  {
    label: 'Getting Started',
    route: { name: 'pagecontent', params: { page: 1 } },
    sublinks: [
      {
        label: 'The Progressive Framework',
        route: { name: 'pagecontent', params: { page: 2 } }
      },
      {
        label: 'Single-File Components',
        route: { name: 'pagecontent', params: { page: 3 } }
      }
    ]
  },
  {
    label: 'Section',
    sublinks: [
      {
        label: 'Title'
      },
      {
        label: 'Title'
      },
      {
        label: 'Title'
      }
    ]
  }
]
</script>
