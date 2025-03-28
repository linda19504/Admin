<!-- <template> -->
 <!-- <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-if="matched[0].meta.title !==  `/${HOME_MAIN.MAIN_PAGE}`  "key="home" :to="{ path: '/' }">
        <div class="breadcrumb-item">
          <span class="breadcrumb-title">{{HOME_MAIN.MAIN_PAGE}}</span>
        </div>
      </el-breadcrumb-item>

      <el-breadcrumb-item v-for="(item, index) in breakcrumbList" :key="item.name">
        <span v-if="item.redirect === 'noRedirect' || index == breakcrumbList.length - 1" class="no-redirect">{{ item.title }}</span>
        <a v-else @click.prevent="handleLink(item)">{{ item.title }}</a>
      </el-breadcrumb-item>  
    </transition-group>
  </el-breadcrumb> -->
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
<!-- </template> -->
<!-- <script setup>
 import { ref, watch } from 'vue'
 import { useRoute, useRouter } from 'vue-router'
 import { HOME_MAIN } from '@/constants/MainPage.constants.js'

 const route = useRoute()
 const router = useRouter()
 const breakcrumbList = ref([])
 const getBreadcrumbs =()=>{
 const matched = route.matched || []
 breakcrumbList.value = route.matched.map((item) => ({
     path: item.path,
     title: item.meta.title === 'function' ? item.meta.title(route) : item.meta.title
   }))
   console.log("title:"+JSON.stringify(breakcrumbList.value))
   const first = matched[0]
   if (first && first.path !== `/${HOME_MAIN.MAIN_PAGE}`) {
     matched = [
       {
        path: `/${HOME_MAIN.MAIN_PAGE}`,
        meta: { title: HOME_MAIN.MAIN_PAGE || '首页' }
       }
     ].concat(matched)
   }
 }

 初始获取面包屑
 getBreadcrumbs()
 监听路由变化
 watch(() => route.path, getBreadcrumbs)

 处理面包屑点击
 const handleLink = (item) => {
  router.push(item.path)
 }
</script> -->

<!-- <style>
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
}</style> -->
<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <!-- 首页面包屑 -->
      <!-- <el-breadcrumb-item 
        v-if="shouldShowHome"
        key="home" 
        :to="{ path: `/${HOME_MAIN.MAIN_PAGE}` }"
      >
        <span class="breadcrumb-title">
          {{ HOME_MAIN.MAIN_TITLE || '首页' }}
        </span>
      </el-breadcrumb-item> -->

      <!-- 动态面包屑项 -->
      <el-breadcrumb-item 
        v-for="(item, index) in breadcrumbList" 
        :key="item.path"
      >
        <span
          v-if="item.redirect === 'noRedirect' || index === breadcrumbList.length - 1"
          class="no-redirect"
        >
          {{ item.title }}
        </span>
        <router-link
          v-else
          :to="item.path"  
          class="breadcrumb-link"
        >
          {{ item.title }}
        </router-link>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'

const route = useRoute()
const router = useRouter()
const breadcrumbList = ref([])

// 判断是否显示首页面包屑
const shouldShowHome = computed(() => {
  const firstMatched = route.matched[0]
  return firstMatched?.path !== `/${HOME_MAIN.MAIN_PAGE}` // 判断第一个匹配的路由路径是否不等于首页路径
})

// 解析面包屑标题
const resolveTitle = (item) => {
    // 检查meta.title是否是函数类型
  if (typeof item.meta?.title === 'function') {
     // 如果是函数，调用并传入当前路由对象，返回动态计算的标题
    return item.meta.title(route)
  }
  // 如果不是函数，返回静态标题，如果没有则返回"未命名"
  // 使用?.避免item.meta为undefined时报错
  return item.meta?.title || '未命名'
}

// 获取面包屑数据
const getBreadcrumbs = () => {
  // 安全获取匹配的路由记录
  const matched = route.matched?.filter(item => item.meta?.title) || []
  
  // 处理首页逻辑
  const breadcrumbs = shouldShowHome.value//当 shouldShowHome.value 为 true 时，在数组开头添加首页项
    ? [
        {
          path: `/${HOME_MAIN.MAIN_PAGE}`,
          meta: { title: HOME_MAIN.MAIN_TITLE || '首页' }
        },
        ...matched// 展开操作符将原有匹配项展开到新数组
      ]
    : matched//不需要添加首页时直接使用原数组

  // 映射为面包屑需要的数据结构
  breadcrumbList.value = breadcrumbs.map(item => ({
    path: item.path || '#',
    title: resolveTitle(item),
    redirect: item.redirect
  }))
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

<style scoped>
.app-breadcrumb {
  margin-bottom: 16px;
  font-size: 14px;
  display: flex;
  align-items: center;
}

.breadcrumb-title {
  font-weight: 500;
}

.breadcrumb-link {
  color: var(--el-color-primary);
  text-decoration: none;
  transition: color 0.2s;
}

.breadcrumb-link:hover {
  color: var(--el-color-primary-light-3);
  text-decoration: underline;
}

.no-redirect {
  color: var(--el-text-color-regular);
  cursor: default;
}

/* 过渡动画 */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.3s ease;
}

.breadcrumb-enter-from,
.breadcrumb-leave-to {
  opacity: 0;
  transform: translateX(20px);
}
</style>