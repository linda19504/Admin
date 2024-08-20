import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage.vue'),
      meta: { breadcrumb: '通用平台' } 
    },
    {
      path: '/PageList',
      name: 'PageList',
      component: () => import('@/views/PageList.vue'),   
      meta: { breadcrumb: '' } 
    },
    {
      path:'/MainPage',
      name:'MainPage',
      component: () => import('@/views/MainPage.vue'),
      children:[{
        path:'接口管理',
        component: 接口管理,
        // meta: { breadcrumb: '接口管理' }
       },
      ],
      // meta: { breadcrumb: '接口管理' },
    },
    {
      path:'/Profile',
      name:'Profile',
      component:() => import('@/views/Profile.vue'),
      meta:{ breadcrumb: '我的申请单'}
    }

    
  ]
})

export default router
