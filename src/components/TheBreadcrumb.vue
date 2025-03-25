<template>
  <el-breadcrumb separator="/">
    <!-- <el-breadcrumb-item :to="{ path: '/' }">{{ HOME_MAIN.MAIN_PAGE }}</el-breadcrumb-item> -->
    <el-breadcrumb-item :to="{ path: `/${HOME_MAIN.MAIN_PAGE}` }">
      {{ HOME_MAIN.MAIN_PAGE || '首页' }}
    </el-breadcrumb-item>
    <el-breadcrumb-item v-for="(item, index) in breakcrumbList" :key="index.path">
      <span >
        {{ item.title }}
      </span>
      <!-- 可点击的非最后一项 -->
      <!-- <router-link
        v-if="index !== breadcrumbList.length - 1"
        :to="item.path"
        class="breadcrumb-link"
      >
        {{ item.title }}
      </router-link> -->
      <!-- 不可点击的最后一项 -->
      <!-- <span v-else class="breadcrumb-current">
        {{ item.title }}
      </span> -->
      <!-- <a v-if="index !== matched.length - 1" @click.prevent="handleLink(item)">{{ item.name }}</a> -->
      <!-- <span v-else>{{ item.name }}</span> -->
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>
<script setup>
import { ref, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'

const route = useRoute()
const router = useRouter()
const breakcrumbList = ref([])

const getBreadcrumbs = () => {
  let matched = route.matched.filter((item) => item.meta && item.meta.title)
  console.log(matched);
  // const first = matched[0]
  // if (first && first.path !== `/${HOME_MAIN.MAIN_PAGE}`) {
  //   matched = [
  //     {
  //       path: `/${HOME_MAIN.MAIN_PAGE}`,
  //       meta: { title: HOME_MAIN.MAIN_PAGE || '首页' }
  //     }
  //   ].concat(matched)
  // }
  breakcrumbList.value = matched.map((item) => ({
    path: item.path,
    title: typeof item.meta.title === 'function' ? item.meta.title(route) : item.meta.title
  }))
  console.log(breakcrumbList.value)
}

// 初始获取面包屑
getBreadcrumbs()
// 监听路由变化
watch(() => route.path, getBreadcrumbs)

// 处理面包屑点击
const handleLink = (item) => {
  router.push(item.path)
}
</script>

<style>
.el-breadcrumb {
  margin-bottom: 16px;
  font-size: 14px;
}

/* 可点击的面包屑项 */
.breadcrumb-link {
  color: var(--el-color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: var(--el-color-primary-light-3);
  text-decoration: underline;
}

/* 当前页面包屑项 */
.breadcrumb-current {
  color: var(--el-text-color-regular);
  font-weight: 500;
}</style>
