<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">主页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in items" :key="index">{{ item.name }}</el-breadcrumb-item>
    </el-breadcrumb>

</template>
<script setup>
import { useRoute } from 'vue-router';
import { ref, watch, onMounted } from 'vue';
const route = useRoute();
const items = ref([]);
// const updateBreadcrumbs = () => {
//     items.value = useRoute().path.split('/').splice(1).map(item => ({
//         name: item || route.path.split('/'),
//         to: { path: route.path },
//     }));
// };
const Breadcrumbs = () => {
    items.value = useRoute().matched.map(route => ({
        name: route.meta.breadcrumb || route.name,
        to: { path: route.path },
    }));
};
watch(() => useRoute(), () => {
    Breadcrumbs();
});

onMounted(() => {
    Breadcrumbs();
});
</script>
<style></style>