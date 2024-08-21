import { createRouter, createWebHistory } from 'vue-router'
import MainPage from'@/views/MainPage.vue'
import Profile from'@/views/Profile.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/LoginPage',
      name: 'LoginPage',
      component: () => import('@/views/LoginPage.vue'),
      meta: { breadcrumb: '' } 
    },
    {
      path: '/PageList', 
      name: 'PageList',
      component: () => import('@/views/PageList.vue'),   
      meta: { breadcrumb: '' } 
    },
    {
      path:'/MainPage',
      name:'通用平台',
      component:MainPage,
      children:[{
        path:'Profile',
        component: () => import('@/views/Profile.vue'),
        name:'我的申请单'
       },
      ],                       
      // meta: { breadcrumb: '接口管理' },
    },
    // {
    //   path:'/Profile',
    //   name:'Profile',
    //   component:() => import('@/views/Profile.vue'),
    //   meta:{ breadcrumb: '我的申请单'}
    // }
  ]

})

export default router
