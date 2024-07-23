import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/about',
      name: 'about',
      component: () => import('@/views/PageHeader.vue')
    },
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage.vue')
    },
    {
      path: '/PageList',
      name: 'PageList',
      component: () => import('@/views/PageList.vue')
    },
  ]
})

export default router
