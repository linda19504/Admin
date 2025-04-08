<template>
  <template v-for="subItem in menuList" :key="subItem.path">
     <!-- 只处理未隐藏的菜单项 -->
    <template v-if="!subItem?.hidden">
       <!-- 情况1：不需要alwaysShow且只有一个有效子菜单 -->
      <template v-if="!subItem.alwaysShow && hasOneChild(subItem.children, subItem)">
         <!-- 渲染单个菜单项组件 -->
        <MenuItem :sub-item="hasOneChild(subItem.children, subItem)"></MenuItem>
      </template>
      <!-- 情况2：需要显示为分组菜单 -->
      <el-sub-menu v-else :index="subItem.path">
        <!-- 分组菜单标题 -->
        <template #title>
            <!-- 菜单图标 -->
          <el-icon>
            <component :is="subItem?.meta?.icon"></component>
          </el-icon>
          <!-- 菜单标题 -->
          <span>{{ subItem?.meta?.title }}</span>
        </template>
         <!-- 递归渲染子菜单 -->
        <SubMenu :menuList="subItem.children"></SubMenu>
      </el-sub-menu>
    </template>
  </template>
</template>

<script setup>
import { defineProps } from 'vue'
import MenuItem from './MenuItem.vue'
import SubMenu from './SubMenu.vue'
let props = defineProps({
  menuList: {
    type: Array,
    default: () => []
  }
})
const hasOneChild = (children = [], parent) => {
  const showingChildren = children.filter((item) => {
    // 过滤掉需要隐藏的菜单
    if (item.hidden) {
      return false //如果子项标记为hidden，排除该项
    } else {
      return true // 否则保留该项
    }
  })
  // 当只有一个子路由器时，默认情况下会显示该子路由器
  if (showingChildren.length === 1) {
    // （如果只有一个显示子项，则将使用）
    return showingChildren[0]
  }
  // 如果没有要显示的子路由器，则显示父路由器
  if (showingChildren.length === 0) {
    return parent
  }
  return false
}
//{
//  path: '/system',
// meta: { title: '系统管理', icon: 'Setting' },
// hidden: false,       // 控制是否显示
// alwaysShow: false,   // 是否强制显示为分组菜单
// children: [          // 子菜单项
//   { path: '/system/user', meta: { title: '用户管理' } }
//  ]
//}
</script>
