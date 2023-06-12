<template>
  <div
    @mouseover="showClipboardIcon = true"
    @mouseleave="showClipboardIcon = false"
    class="relative mb-4"
  >
    <div
      @click="copyToClipboard"
      @mouseleave="showResult = false"
      class="absolute right-1 top-1 cursor-pointer p-2 rounded hover:bg-white/10"
    >
      <div
        v-show="showResult"
        class="text-xs w-max absolute right-10 top-0 cursor-pointer p-2 rounded bg-white/10"
      >
        {{ result }}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#ffffff"
        stroke-width="1"
        stroke-linecap="square"
        stroke-linejoin="arcs"
        class="w-4 h-4"
        v-show="showClipboardIcon"
      >
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
      </svg>
      <span
        v-show="!showClipboardIcon"
        class="text-xs text-slate-500 absolute top-1 right-1 font-bold"
        >{{ buttonText }}</span
      >
    </div>
    <pre class="bg-gray-800 rounded p-6 mb-4"><code>{{ codeText }}</code></pre>
  </div>
</template>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  buttonText: {
    type: String,
    required: true
  },
  codeText: {
    type: String,
    required: true
  }
})

const showClipboardIcon = ref(false)
const result = ref('')
const showResult = ref(false)

const copyToClipboard = () => {
  showResult.value = true
  navigator.clipboard.writeText(props.codeText).then(
    () => {
      result.value = 'Copied'
    },
    (err) => {
      result.value = 'Could not copy'
      console.error('Could not copy: ', err)
    }
  )
}
</script>
