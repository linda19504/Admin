<template>
    <div class="m-screenful">
      <el-tooltip effect="dark" content="全屏" placement="bottom">
        <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" class-name="header-icon" @click="toggle" />
      </el-tooltip>
    </div>
  </template>
  
  <script lang="ts" setup>
    import { useFullscreen } from '@vueuse/core'
    const { toggle, isFullscreen } = useFullscreen()//isFullscreen 表示当前是否处于全屏状态 ； toggle 切换全屏状态（如果当前不是全屏则进入，否则退出）
  </script>
  
  <style lang="scss" scoped>
    .m-screenful {
      display: flex;
      align-items: center;
      padding-right: 0;
      justify-content: center;
      cursor: pointer;
      transition: all 0.3s;
    }
  </style>
  