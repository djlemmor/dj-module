<template>
  <div class="container mt-[3%]">
    <!-- PAGE TITLE -->
    <div>
      <h2 class="text-2xl font-bold text-yellow-500 uppercase">Getting Started</h2>
    </div>
    <!-- MAIN CONTENT -->
    <div class="flex justify-between gap-10">
      <p class="flex-1"></p>
      <h3 class="text-xl font-bold flex-1 text-green-500 my-4">The Progressive Framework</h3>
    </div>
    <div class="flex gap-10">
      <!-- LEFT SIDE -->
      <div class="flex-1 text-sm">
        <div class="relative mb-4">
          <span class="text-xs absolute right-2 top-2 text-slate-500">js</span>
            <pre class="bg-gray-800 rounded p-6 mb-4"><code>import { createApp } from 'vue' 

createApp({ 
  data() { 
    return { 
      count: 0 
    } 
  }
}).mount('#app')</code></pre>
        </div>
        <div class="relative">
        <span class="text-xs absolute right-2 top-2 text-slate-500">template</span>
        <pre class="bg-gray-800 rounded p-4" v-pre><code>&lt;div id="app"&gt;
  &lt;button @click="count++"&gt;
    Count is: {{ count }}
  &lt;/button&gt;
&lt;/div&gt;</code></pre>
        </div>
      </div>
      <!-- RIGHT SIDE -->
      <div class="flex-1 text-lg">
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
import { onMounted, inject } from 'vue'
const footer = inject('footer')
onMounted(() => {
  footer.value = true
})
</script>
