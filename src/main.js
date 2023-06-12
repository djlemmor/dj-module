import './assets/main.css'
import './assets/tailwind.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import FadeTransition from '@/transitions/FadeTransition.vue'

const app = createApp(App)

app.use(router)
app.component('FadeTransition', FadeTransition)

app.mount('#app')
