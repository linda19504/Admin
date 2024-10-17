<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in items" :key="index">
        <a v-if="index!==items.length-1" @click.prevent="handleLink(items)">{{item.name}}</a>
        <span v-else >{{item.name}}</span>
    </el-breadcrumb-item>
   
  </el-breadcrumb>
</template>
<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// import { ref, watch, onMounted } from 'vue';

const route = useRoute();
const router = useRouter();
const items = computed(() => {
return useRoute().matched.map((route) => ({
    name: route.meta.breadcrumb || route.name,
    to: { path: route.path }
  }))
});
const handleLink = (item) => {
  router.push({
    path: item.to
  })
}
</script>
<style>
</style>
