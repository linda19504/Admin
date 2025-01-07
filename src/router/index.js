import { createRouter, createWebHistory } from 'vue-router';
import HomeMainPage from'@/views/HomeMainPage.vue';
import AdminPage from '@/views/AdminPage.vue';
import CreateNextPage from'@/views/CreateNextPage.vue';
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
      path: '/AdminPage', 
      name: '我的申请',
      component: () => import('@/views/AdminPage.vue'),   
      meta: { title: '我的申请' }, },
    {
      path: '/CreateNextPage', 
      name: '新建',
      component: () => import('@/views/CreateNextPage.vue'),   
      meta: { breadcrumb: '' } 
    },
    {
      path:'/MySubmitFile',
      name:'我的提交',
      component:()=>import('@/views/MySubmitFile.vue'),
      meta:{title:'我的提交'}

    }
    // {
    //   path:'/home',
    //   name:'通用平台',
    //   component:CreateNextPage,
    //   children: [
    //     {
    //       path: 'CreateNextPage/model/:model_id(\\d+)',
    //       component: () => import('@/views/CreateNextPage.vue'),
    //       name: '设定项',
    //       props: (route) => {
    //         return { model_id: parseInt(route.params.model_id) }
    //       },
    //     }
      ],                     
})


export default router
