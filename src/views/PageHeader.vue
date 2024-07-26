<template>
    <el-page-header :icon="ArrowLeft" :title="header_title_trans">
        <template #content>

        </template>
        <template #extra>
            <AvatorDropdown avator_url="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
                :dropdown_items="dropdown_items_trans" />
        </template>
    </el-page-header>
</template>

<script setup>
import { reactive, computed } from 'vue'
import { useI18n } from 'vue-i18n';

import { ArrowLeft } from '@element-plus/icons-vue'
import AvatorDropdown from '@/components/AvatorDropdown.vue'


const { t } = useI18n()

const header_title_trans = computed(() => t('nav.back'))
const dropdown_items = reactive([
    { title: "auth.logout", onclick: () => { alert("logout") } },
])
const dropdown_items_trans = computed(() => {
    return dropdown_items.map((item) => { return { ...item, title: t(item.title) } })
})



</script>

<style scoped></style>