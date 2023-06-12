<template>
  <div class="mt-16">
    <pre class="bg-gray-800 rounded p-4"><code>{{ testCopy }}</code></pre>
    <button @click="copyToClipboard">Copy to Clipboard</button>
    <br />
    {{ result }}
  </div>
</template>

<script setup>
import { ref } from 'vue'

const result = ref('')
const testCopy = ref(
  '<div id="app">\n  <button @click="count++">\n    Count is: {{ count }}\n  </button>\n</div>'
)

const copyToClipboard = () => {
  navigator.clipboard.writeText(testCopy.value).then(
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
