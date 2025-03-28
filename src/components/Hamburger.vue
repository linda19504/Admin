<template>
    <el-breadcrumb class="app-breakcrumb" separator="/">
      <trasition-group name="breakcrumb">
        <el-breakcrumb-item v-if="matched[0].meta.title !== '首页'" key="home" :to="{ path: '/' }">
          <div class="breakcrumb-item">
            <span class="breakcrumb-title">首页</span>
          </div>
        </el-breakcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in matched" :key="item.name">
          <span
            v-if="item.redirect === 'noRedirect' || index == matched.length - 1"
            class="no-redirect"
            >{{ item.meta.title }}</span>
          <a v-else @click.prevent="handleLink(item)">{{ item.meta.title }}</a>
        </el-breadcrumb-item>
  
      </trasition-group>
    </el-breadcrumb>
  </template>
  <script setup>
  import { computed } from 'vue'
  import { useRoute, useRouter } from 'vue-router'
  // import { HOME_MAIN } from '@/constants/MainPage.constants.js'
  const route = useRoute()
  const router = useRouter()
  // const breakcrumbList = ref([])
  

  const handleLink = (item) => {
    router.push(item.path)
  }
  const matched = computed(() =>
    router.matched.filter((item) => item.meta && item.meta.title && router.meta.breadcrumb !== false)
  )
  </script>
  