<template>
  <div class="container mx-auto p-12">
    <!-- PAGE TITLE -->
    <div>
      <h2 class="text-2xl font-bold text-yellow-500 uppercase">Getting Started</h2>
    </div>
    <!-- MAIN CONTENT -->
    <div class="flex flex-col justify-between xl:flex-row xl:gap-10">
      <p class="flex-1"></p>
      <h3 class="text-xl font-bold flex-1 text-green-500 my-4">The Progressive Framework</h3>
    </div>
    <div class="flex flex-col xl:flex-row xl:gap-10">
      <!-- LEFT SIDE -->
      <div class="flex-1 text-xs xl:text-sm">
        <code-block :buttonText="'js'" :codeText="jsCodeText" />
        <code-block :buttonText="'template'" :codeText="templateCodeText" />
      </div>
      <!-- RIGHT SIDE -->
      <div class="flex-1 text-base xl:text-lg">
        <p class="mb-4">
          Vue is a framework and ecosystem that covers most of the common features needed in
          frontend development. But the web is extremely diverse - the things we build on the web
          may vary drastically in form and scale. With that in mind, Vue is designed to be flexible
          and incrementally adoptable. Depending on your use case, Vue can be used in different
          ways:
        </p>
        <ol class="list-disc ml-5">
          <li>Enhancing static HTML without a build step</li>
          <li>Embedding as Web Components on any page</li>
          <li>Single-Page Application (SPA)</li>
          <li>Fullstack / Server-Side Rendering (SSR)</li>
          <li>Jamstack / Static Site Generation (SSG)</li>
          <li>Targeting desktop, mobile, WebGL, and even the terminal</li>
        </ol>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue'
import CodeBlock from '@/components/codeblock/CodeBlock.vue'

const footer = inject('footer')
const jsCodeText = ref(
  "import { createApp, ref } from 'vue'\n\ncreateApp({\n  setup() {\n    return {\n      count: ref(0)\n    }\n  }\n}).mount('#app')"
)
const templateCodeText = ref(
  '<div id="app">\n  <button @click="count++">\n    Count is: {{ count }}\n  </button>\n</div>'
)

onMounted(() => {
  footer.value = true
})
</script>
