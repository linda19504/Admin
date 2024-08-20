<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">Home</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in items" :key="index">{{ item }}</el-breadcrumb-item>
    </el-breadcrumb>

</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
const items = ref();
const updateBreadcrumbs = () => {
    items.value = useRoute().path.split('/').splice(1).map(item => ({
        name: item || route.path.split('/'),
        to: { path: route.path },
    }));
};
watch(() => useRoute(), () => {
    updateBreadcrumbs();
});

onMounted(() => {
    updateBreadcrumbs();
});
</script>
<style></style>