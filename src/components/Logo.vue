<template>
  <div class="sidebar-logo-container">
    <transition name="sidebarLogoFadeCl">
      <router-link v-if="isCollapse" key="collapse" class="sidebar-logo-link" to="/">
        <img src="" class="sidebar-logo" />
      </router-link>
      <router-link v-else key="expand" class="sidebar-logo-link" to="/">
        <img src="" class="sidebar-logo" />
        <h1 class="sidebar-title">{{HOME_MAIN.MAIN_PAGE}}</h1>
      </router-link>   
    </transition>
  </div>
</template>

<script setup>
import { HOME_MAIN } from '@/constants/MainPage.constants.js'
defineProps()
</script>
<style lang="scss" scoped>
  .sidebarLogoFadeCl-enter-active {
    transition: opacity 2s;
  }
  .sidebarLogoFadeCl-enter-from,
  .sidebarLogoFadeCl-leave-to {
    opacity: 0;
  }
  .sidebar-logo-container {
    position: relative;
    width: 100%;
    height: 50px;
    line-height: 50px;
    background: #2b2f3a;
    text-align: center;
    overflow: hidden;

    & .sidebar-logo-link {
      height: 100%;
      width: 100%;

      & .sidebar-logo {
        width: 32px;
        height: 32px;
        vertical-align: middle;
      }
      & .sidebar-title {
        display: inline-block;
        margin: 0;
        color: #fff;
        font-weight: 600;
        margin-left: 12px;
        line-height: 50px;
        font-size: 14px;
        vertical-align: middle;
      }
    }
  }
</style>
