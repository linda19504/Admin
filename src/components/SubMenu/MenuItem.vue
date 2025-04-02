<template>
  <el-menu-item :index="subItem.path" @click="handleClickMenu(subItem)">
    <el-icon><component is="subItem?.meta?.icon"></component></el-icon>
    <template #title>
        <span>{{ subItem?.meta?.title }}</span>
    </template>
  </el-menu-item>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { isExternal } from '@/utils/validate'

const router = useRouter()
const props = defineProps({
    menuList:{
        type: Array,
        default: () => [],
    },
    subItem:{
        type: Object,
        default: () => ({}),
    }
})
// const handleClickMenu =(subItem)=>{
//     if (isExternal(subItem.path)) return window.open(subItem.path, '_blank')
//     router.push(subItem.path)
// }
const handleClickMenu = (subItem) => {
  if (isExternal(subItem.path)) {
    window.open(subItem.path, '_blank') // 新标签页打开外链
  } else {
    router.push(subItem.path) // 内部路由跳转
  }
}
</script>
