<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in items" :key="index">{{ item.name }}</el-breadcrumb-item>
        <el-breadcrumb-item>
            <a href="/">我的审批单</a>
        </el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';

const items = ref([]);

const updateBreadcrumbs = () => {
    items.value = useRoute().matched.map(route => ({
        name: route.meta.breadcrumb || route.name,
        to: { path: route.path },
    }));
};

watch(() => useRoute(), () => {
    updateBreadcrumbs();
});//使用 watch 监听 $route 的变化，并在变化时调用 updateBreadcrumbs 方法更新面包屑导航

onMounted(() => {
    updateBreadcrumbs();
});//使用 onMounted 钩子代替 created 钩子，在组件挂载后调用 updateBreadcrumbs 方法初始化面包屑导航。
</script>
<style></style>