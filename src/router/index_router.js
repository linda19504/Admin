// import { createRouter, createWebHistory, RouteRecordRaw, createWebHashHistory, Router } from 'vue-router'
// const asyncRoutes = [
//     ...dataScreenRouter,
//     ...echartsRouter,
//     ...tableRouter,
//     ...formRouter,
//     ...othersRouter,
//     ...functionPageRouter,
//     ...chatRouter,
//     ...nestedRouter,
//     ...excelRouter,
//     ...externalLink,
//     ...systemRouter,
//   ];
// const constantRoutes = [
//     { path: '/', component: HomeMainPage, alias: '/home' },
//        {
//          path: '/UserDetail',
//          name: '我的设定',
//          component: () => import('@/views/Profile.vue'),
//          meta: { requiresAuth: true }
//        },
//        {
//          path: '/login',
//          name: '登录',
//          component: () => import('@/views/LoginPage.vue'),
//          meta: { requiresAuth: true }
//        },
//        { 
//          path: '/PageList',
//          name: '我的列表',
//          component: () => import('@/views/MyPageList.vue'),
//          meta: { breadcrumb: '' }
//        },
//        {
//          path: '/AdminPage',
//          name: '我的申请',
//          component: () => import('@/views/AdminPage.vue'),
//          meta: { title: '我的申请' }
//        },
//        {
//          path: '/CreateNextPage',
//          name: '新建',
//          component: () => import('@/views/CreateNextPage.vue'),
//          meta: { breadcrumb: '' }
//        },
//        {
//          path: '/Upload',
//          name: '加载',
//          component: () => import('@/views/Upload.vue'),
//          meta: { breadcrumb: '' }
//        },
//        {
//          path: '/MySubmitFile',
//          name: '我的提交',
//          component: () => import('@/views/MySubmitFile.vue'),
//          meta: { title: '我的提交' }
//        },
//        {
//         path: '/other/editor',
//         compon  ent: () => import('@/views/other/editor/index.vue'),
//         name: 'editor',
//         meta: { title: '富文本编辑器', roles: ['other'], icon: 'MenuIcon' }
//       },
//       {
//         path: '/settings',
//         name: '设置',
//         component: () => import('@/views/AdminPage.vue'),
//         props: (route) => ({
//           limit: parseInt(route.query.limit) || 50,
//           offset: parseInt(route.query.offset) || 0
//         })
//       },
//       {
//         path: '/my-requests',
//         name: '我的申请单',
//         component: () => import('@/views/AdminPage.vue'),
//         props: (route) => ({
//           limit: parseInt(route.query.limit) || 50,
//           offset: parseInt(route.query.offset) || 0
//         })
//       },
//       {
//         path: '/my-approvals',
//         name: '我的审批单',
//         component: () => import('@/views/AdminPage.vue'),
//         props: (route) => ({
//           limit: parseInt(route.query.limit) || 50,
//           offset: parseInt(route.query.offset) || 0
//         })
//       },
//       {
//         path: '/user-profile',
//         name: '用户信息',
//         component: () => import('@/views/Profile.vue')
//       },
//       {
//         path: '/settings/:setting_id',
//         name: '设置详情',
//         component: () => import('@/views/AdminPage.vue'),
//         props: true
//       },
//       {
//         path: '/approvals/:approval_id',
//         name: '审批单详情',
//         component: () => import('@/views/AdminPage.vue'),
//         props: true
//       }
//   ];
//   // 404 路由配置
// const notFoundRouter = {
//     path: '/:pathMatch(.*)',
//     name: 'notFound',
//     redirect: '/404',
//   };
  
//   // 创建路由实例
//   const router = createRouter({
//     history: createWebHashHistory(), // 使用哈希模式
//     routes: constantRoutes,
//   });
  
//   export default router;
  