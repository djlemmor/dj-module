<template>
  <div class="container mx-auto p-12">
    <!-- PAGE TITLE -->
    <div>
      <h2 class="text-2xl font-bold text-yellow-500 uppercase">Getting Started</h2>
    </div>
    <!-- MAIN CONTENT -->
    <div class="flex flex-col justify-between xl:flex-row xl:gap-10">
      <p class="flex-1"></p>
      <h3 class="text-xl font-bold flex-1 text-green-500 my-4">Single-File Components</h3>
    </div>
    <div class="flex flex-col xl:flex-row xl:gap-10">
      <!-- LEFT SIDE -->
      <div class="flex-1 text-sm">
        <code-block :buttonText="'vue'" v-if="showMobileCode" :codeText="vueCodeTextMobile" />
        <code-block :buttonText="'vue'" v-else :codeText="vueCodeText" />
      </div>
      <!-- RIGHT SIDE -->
      <div class="flex-1 text-base xl:text-lg">
        <p class="mb-4">
          In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file
          format called Single-File Component (also known as *.vue files, abbreviated as SFC). A Vue
          SFC, as the name suggests, encapsulates the component's logic (JavaScript), template
          (HTML), and styles (CSS) in a single file. Here's the previous example, written in SFC
          format:
        </p>
        <p>
          SFC is a defining feature of Vue and is the recommended way to author Vue components if
          your use case warrants a build setup. You can learn more about the how and why of SFC in
          its dedicated section - but for now, just know that Vue will handle all the build tools
          setup for you.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject, ref } from 'vue'
import CodeBlock from '@/components/codeblock/CodeBlock.vue'

onMounted(() => {
  footer.value = true
})

const footer = inject('footer')
const showMobileCode = ref(window.innerWidth < 1024)
const vueCodeText = ref(
  '<script setup>\nimport { ref } from \'vue\'\nconst count = ref(0)\n<script>\n\n<template>\n  <button @click="count++">Count is: {{ count }}</button>\n</template>\n\n<style scoped>\nbutton {\n  font-weight: bold;\n}\n</style>'
)
const vueCodeTextMobile = ref(
  '<script setup>\nimport { ref } from \'vue\'\nconst count = ref(0)\n<script>\n\n<template>\n  <button @click="count++">\n     Count is: {{ count }}\n  </button>\n</template>\n\n<style scoped>\nbutton {\n  font-weight: bold;\n}\n</style>'
)

window.onresize = () => {
  showMobileCode.value = window.innerWidth < 640
}
</script>
