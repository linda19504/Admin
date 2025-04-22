<script setup>
import { RouterView } from 'vue-router'
import { computed } from 'vue'
import { useSettingStore } from '@/stores/modules/setting'

const SettingStore = useSettingStore()
  // 配置全局组件大小
  const globalComSize = computed(() => SettingStore.themeConfig.globalComSize)
</script>

<template>
  <div class="fullscreen">
    <el-config-provider :size="globalComSize"><RouterView /></el-config-provider>

  </div>
</template>
