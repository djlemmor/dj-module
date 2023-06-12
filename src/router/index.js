import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import IntroductionView from '../views/IntroductionView.vue'
import PageContent from '../views/PageContent.vue'
import TestView from '@/views/TestView.vue'

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
      path: '/pagecontent',
      redirect: '/'
    },
    {
      path: '/pagecontent/:page',
      name: 'pagecontent',
      component: PageContent,
      props: true
    },
    {
      path: '/test',
      name: 'test',
      component: TestView
    }
  ]
})

export default router
