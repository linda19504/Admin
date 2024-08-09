import { createRouter, createWebHistory } from 'vue-router'
// import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
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
    {
      path:'/MainPage',
      name:'MainPage',
      component: () => import('@/views/MainPage.vue')
    },
  ]
})

export default router
