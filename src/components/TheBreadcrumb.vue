<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in matched" :key="index.name">
      <a v-if="index !== matched.length - 1" @click.prevent="handleLink(item)">{{ item.name }}</a>
      <span v-else>{{ item.name }}</span>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
const matched = computed(() => {
  return route.matched.filter((route) => ({
    name: route.meta.title || route.name,
    to: { path: route.path }
  }))
})
const handleLink = (item) => {
  router.push({
    path: item.to
  })
}
</script>
<style></style>
