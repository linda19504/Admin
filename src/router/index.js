import { createRouter, createWebHistory } from 'vue-router'
import CreateNextPage from'@/views/CreateNextPage.vue'
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
      path:'/CreateNextPage',
      name:'通用平台',
      component:CreateNextPage,
      children:[{
        path:'Profile',
        component: () => import('@/views/Profile.vue'),
        name:'设定项'
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
