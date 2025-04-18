// import { HomeFilled } from '@element-plus/icons-vue/dist/types'
import { createRouter, createWebHistory } from 'vue-router'
import HomeMainPage from '@/views/HomeMainPage.vue'
import TheCard from '@/components/TheCard.vue'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', component: HomeMainPage, alias: '/home' },
    {
      path: '/UserDetail',
      name: '我的设定',
      component: () => import('@/views/Profile.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/login',
      name: '登录',
      component: () => import('@/views/login/index.vue'),
      meta: { requiresAuth: true }
    },
    {
      path: '/PageList',
      name: '我的列表',
      component: () => import('@/views/MyPageList.vue'),
      meta: { breadcrumb: '' }
    },

    {
      path: '/AdminPage',
      name: 'AdminPage',//路由名称应该是唯一的
      component: () => import('@/views/AdminPage.vue'),
      meta: { 
        title: '我的申请',
        breadcrumb: '我的申请'//添加面包屑配置
      },
      children: [
        {
          path: 'CreateNextPage',
          name: 'CreateNextPage',
          component: () => import('@/views/CreateNextPage.vue'),
          meta: { 
            title: '我的申请详情',
            breadcrumb: '我的申请详情'//子路由面包屑
          }
        }
      ]
    },
    {
      path: '/CreateNextPage',
      name: '新建',
      component: () => import('@/views/CreateNextPage.vue'),
      meta: { breadcrumb: '' }
    },
    {
      path: '/Upload',
      name: '加载',
      component: () => import('@/views/Upload.vue'),
      meta: { breadcrumb: '' }
    },
    {
      path: '/MySubmitFile',
      name: '我的提交',
      component: () => import('@/views/MySubmitFile.vue'),
      meta: { title: '我的提交' }
    },
    {
      path: '/TheCard',
      name: '我的卡片',
      component: () => import('@/components/TheCard.vue'),
      meta: { title: '我的卡片' }
    },
    {
      path: '/TheCards',
      name: '我的卡片',
      component: () => import('@/components/TheCards.vue'),
      meta: { title: '我的卡片' }
    },
    // {
    //   path: '/MyPageList',
    //   name: '我的列表页',
    //   component: () => import('@/views/MyPageList.vue'),
    //   meta: { title: '我的列表页' }
    // },
    // {
    //   path: '/RichTextPage',
    //   name: '富文本编辑器',
    //   component: () => import('@/views/RichTextPage.vue'),
    //   meta: { title: '富文本编辑器' }
    // }
    {
      path: '/other/editor',
      component: () => import('@/views/other/editor/index.vue'),
      name: 'editor',
      meta: { title: '富文本编辑器', roles: ['other'], icon: 'MenuIcon' }
    },
    {
      path: '/settings',
      name: '设置',
      component: () => import('@/views/AdminPage.vue'),
      props: (route) => ({
        limit: parseInt(route.query.limit) || 50,
        offset: parseInt(route.query.offset) || 0
      })
    },
    {
      path: '/my-requests',
      name: '我的申请单',
      component: () => import('@/views/AdminPage.vue'),
      props: (route) => ({
        limit: parseInt(route.query.limit) || 50,
        offset: parseInt(route.query.offset) || 0
      })
    },
    {
      path: '/my-approvals',
      name: '我的审批单',
      component: () => import('@/views/AdminPage.vue'),
      props: (route) => ({
        limit: parseInt(route.query.limit) || 50,
        offset: parseInt(route.query.offset) || 0
      })
    },
    {
      path: '/user-profile',
      name: '用户信息',
      component: () => import('@/views/Profile.vue')
    },
    {
      path: '/settings/:setting_id',
      name: '设置详情',
      component: () => import('@/views/AdminPage.vue'),
      props: true
    },
    {
      path: '/approvals/:approval_id',
      name: '审批单详情',
      component: () => import('@/views/AdminPage.vue'),
      props: true
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
  ]
})

export default router
