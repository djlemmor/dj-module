<template>
  <div class="container">
    <!-- PAGE TITLE -->
    <div>
      <h2 class="text-2xl font-bold text-yellow-500 uppercase">Getting Started</h2>
    </div>
    <!-- MAIN CONTENT -->
    <div class="flex justify-between gap-10">
      <p class="flex-1"></p>
      <h3 class="text-xl font-bold flex-1 text-green-500 my-4">Single-File Components</h3>
    </div>
    <div class="flex gap-10">
      <!-- LEFT SIDE -->
      <div class="flex-1 text-sm">
        <div class="relative mb-4">
          <span class="text-xs absolute right-2 top-2 text-slate-500">vue</span>
            <pre class="bg-gray-800 rounded p-6 mb-4"><code>&lt;script&gt;
export default {
  data() {
    return {
      count: 0
    }
  }
}
&lt;/script&gt;

&lt;template&gt;
  &lt;button @click="count++"&gt;Count is: {{ count }}&lt;/button&gt;
&lt;/template&gt;

&lt;style scoped&gt;
button {
  font-weight: bold;
}
&lt;/style&gt;</code></pre>
        </div>
      </div>
      <!-- RIGHT SIDE -->
      <div class="flex-1 text-lg">
        <p class="mb-4">
          In most build-tool-enabled Vue projects, we author Vue components using an HTML-like file format called Single-File Component (also known as *.vue files, abbreviated as SFC). A Vue SFC, as the name suggests, encapsulates the component's logic (JavaScript), template (HTML), and styles (CSS) in a single file. Here's the previous example, written in SFC format:
        </p>
        <p>
          SFC is a defining feature of Vue and is the recommended way to author Vue components if your use case warrants a build setup. You can learn more about the how and why of SFC in its dedicated section - but for now, just know that Vue will handle all the build tools setup for you.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, inject } from 'vue'
const footer = inject('footer')
onMounted(() => {
  footer.value = true
})
</script>
