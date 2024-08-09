<template>
    <template>
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                <img style="width: 100px" src="../assets/logo.svg" alt="Element logo" />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">Processing Center</el-menu-item>
            <el-sub-menu index="2">
                <template #title>Workspace</template>
                <el-menu-item index="2-1">item one</el-menu-item>
                <el-menu-item index="2-2">item two</el-menu-item>
                <el-menu-item index="2-3">item three</el-menu-item>
            </el-sub-menu>
        </el-menu>
    </template>
    <div class="common-layout">
        <el-container>
            <el-aside width="400px">
                <div>
                    <el-row class="tac">
                        <el-col :span="12">
                            <h5 class="mb-6"></h5>
                            <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen"
                                @close="handleClose">
                                <el-sub-menu index="1">
                                    <template #title>
                                        <el-icon>
                                            <location />
                                        </el-icon>
                                        <span>Navigator One</span>
                                    </template>
                                    <el-menu-item-group title="Group One">
                                        <el-menu-item index="1-1">item one</el-menu-item>
                                        <el-menu-item index="1-2">item two</el-menu-item>
                                    </el-menu-item-group>
                                    <el-menu-item-group title="Group Two">
                                        <el-menu-item index="1-3">item three</el-menu-item>
                                    </el-menu-item-group>
                                </el-sub-menu>
                                <el-menu-item index="2">
                                    <el-icon><icon-menu /></el-icon>
                                    <span>Navigator Two</span>
                                </el-menu-item>
                                <el-menu-item index="3" disabled>
                                    <el-icon>
                                        <document />
                                    </el-icon>
                                    <span>Navigator Three</span>
                                </el-menu-item>
                                <el-menu-item index="4">
                                    <el-icon>
                                        <setting />
                                    </el-icon>
                                    <span>Navigator Four</span>
                                </el-menu-item>
                            </el-menu>
                        </el-col>
                    </el-row>
                </div>
            </el-aside>
            <el-container>
                <el-header>软固件接口管理系统</el-header>
                <el-main>
                    <div class="common-layout">
                        <el-container>
                            <el-header>通用平台 / 接口管理</el-header>
                            <el-main>
                                <div class="table_container">
                                    <el-table :data="tableData" border>
                                        <el-table-column fixed prop="date" label="Date" width="150" />
                                        <el-table-column prop="name" label="Name" width="120" />
                                        <el-table-column prop="state" label="State" width="120" />
                                        <el-table-column prop="city" label="City" width="320" />
                                        <el-table-column prop="address" label="Address" width="600" />
                                        <el-table-column prop="zip" label="Zip" width="600" />
                                    </el-table>
                                </div>
                            </el-main>
                            <el-footer>总计 998条 20 条/页 1 2 3 4 5 6 100 跳转到 </el-footer>
                        </el-container>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import { ref } from "vue";
import {
    Document,
    Menu as IconMenu,
    Location,
    Setting,
} from '@element-plus/icons-vue';
const activeIndex = ref('1')
const handleOpen = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
    console.log(key, keyPath)
}
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
}
const tableData = [
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },
    {
        date: '2016-05-03',
        name: 'Tom',
        state: 'California',
        city: 'Los Angeles',
        address: 'No. 189, Grove St, Los Angeles',
        zip: 'CA 90036',
    },

];
</script>
<style>
.flex-grow {
    flex-grow: 1;
}
</style>
