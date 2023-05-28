import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import Page1Content from '../views/pages/Page1Content.vue'
import Page2Content from '../views/pages/Page2Content.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: AboutView
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: IntroductionView
    },
    {
      path: '/page1content',
      name: 'page1content',
      component: Page1Content
    },
    {
      path: '/page2content',
      name: 'page2content',
      component: Page2Content
    }
  ]
})

export default router
