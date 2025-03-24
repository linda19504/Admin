<template>
    <el-dropdown trigger="hover">
      <el-button size="small" type="primary">
        <span>更多</span>
        <el-icon class="el-icon--right"><arrow-down /></el-icon>
      </el-button>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item @click="refresh"
            ><el-icon :size="14"><Refresh /></el-icon> 刷新当页</el-dropdown-item
          >
          <el-dropdown-item @click="closeCurrentTab"
            ><el-icon :size="14"><FolderRemove /></el-icon> 关闭当前</el-dropdown-item
          >
          <el-dropdown-item @click="closeOtherTab"
            ><el-icon :size="14"><Close /></el-icon>关闭其他</el-dropdown-item
          >
          <el-dropdown-item @click="closeAllTab"
            ><el-icon :size="14"><FolderDelete /></el-icon>关闭所有</el-dropdown-item
          >
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </template>
<script setup>
import { computed } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useSettingStore } from '@/stores/modules/setting'
import { useTagsViewStore } from '@/stores/modules/tagsView'
const route = useRoute()
const router = useRouter()
const SettingStore = useSettingStore() 
const TagsViewStore = useTagsViewStore()
const refresh = ()=>{
  
    SettingStore.setReload()
}
const closeCurrentTab=()=>{
  TagsViewStore.toLastView(route.path)
  TagsViewStore.delView(route.path)
}

const closeOtherTab = async () => {
  TagsViewStore.delOtherViews(route.path) 
}
const closeAllTab = async () => {
    await TagsViewStore.delAllViews()
    TagsViewStore.goHome()
  }
</script>
<style lang="scss" scoped>
  .more {
    // background-color: $primaryColor;
    color: white;
    .tags-view-item {
      display: flex;
      align-items: center;
    }
  }
</style>