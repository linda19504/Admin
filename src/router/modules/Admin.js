/** When your routing table is too long, you can split it into small modules**/



const adminRouter = [
  {
    path: '/admin',
    component: Layout,
    redirect: '',
    name: 'admin',
    meta: {
      title: '我的申请',
    },
    children: [
      {
        path: '/AdminPage/:id(\\d+)',
        name:'我的申请',
        component: () => import('@/views/AdminPage.vue'),
        meta: { title:'我的申请详情',}
      },
    //   {
    //     path: '/table/inlineTable',
    //     component: () => import('@/views/table/InlineEditTable/index.vue'),
    //     name: 'inlineTable',
    //     meta: { title: '行内编辑', keepAlive: true, icon: 'MenuIcon' },
    //   },
    //   {
    //     path: '/table/editableProTable',
    //     component: () => import('@/views/table/EditableProTable/index.vue'),
    //     name: 'editableProTable',
    //     meta: { title: '可编辑表格', keepAlive: true, icon: 'MenuIcon' },
    //   },
 
    ],
  },
]

export default adminRouter
