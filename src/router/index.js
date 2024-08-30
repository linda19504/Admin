import { createRouter, createWebHistory } from 'vue-router';
import HomeMainPage from'@/views/HomeMainPage.vue';
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
      path:'/home',
      name:'通用平台',
      component:CreateNextPage,
      children: [
        {
          path: 'CreateNextPage/model/:model_id(\\d+)',
          component: () => import('@/views/CreateNextPage.vue'),
          name: '设定项',
          props: (route) => {
            return { model_id: parseInt(route.params.model_id) }
          },
        }
        // {
        //   path: "setting/model/:model_id(\\d+)/detail/:setting_id(\\d+)",
        //   name: "SettingDetail",
        //   props: (route) => {
        //     return {
        //       model_id: parseInt(route.params.model_id),
        //       setting_id: parseInt(route.params.setting_id),
        //     };
        //   },
        //   component: () => import("@/views/SettingDetailView.vue"),
        // },
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
