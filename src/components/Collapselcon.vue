<template>
    <div class="hamburger-container" @click="handleCollapse">
      <el-icon v-if="isCollapse" class="icon"><expand /></el-icon>
      <el-icon v-else class="icon"><fold /></el-icon>
    </div>
  </template>
  <script setup>
    import { useSettingStore } from '@/stores/modules/setting'
    import { computed } from 'vue'
    const SettingStore = useSettingStore()
    const isCollapse = computed(() => !SettingStore.isCollapse)
    const handleCollapse = () => {
      SettingStore.setCollapse(isCollapse.value)
    }
  </script>
  <style lang="scss" scoped>
    .hamburger-container {
      padding: 0px 15px;
      height: 100%;
      display: flex;
      align-items: center;
      &:hover {
        background: rgba(0, 0, 0, 0.025);
      }
      .icon {
        font-size: 24px;
        cursor: pointer;
      }
    }
  </style>
  