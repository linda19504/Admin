<template>
    <div class="common-layout fullscreen">
        <el-container class="h-max">
            <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                    @select="handleSelect">
                    <el-menu-item index="0">
                        <el-icon>
                            <ChromeFilled />
                        </el-icon>
                        <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
                    </el-menu-item>
                    <el-menu-item index="1">Processing Center</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>Workspace</template>
                        <el-menu-item index="2-1">item one</el-menu-item>
                        <el-menu-item index="2-2">item two</el-menu-item>
                        <el-menu-item index="2-3">item three</el-menu-item>
                    </el-sub-menu>
                </el-menu>
            </el-header>
            <el-container class="h-max">
                <SideBar></SideBar>
                <el-main>
                    <el-container>
                        <el-header>
                            <el-breadcrumb separator="/">
                                <el-breadcrumb-item :to="{ path: '/' }">通用平台</el-breadcrumb-item>
                                <el-breadcrumb-item>
                                    <a href="/">我的审批单</a>
                                </el-breadcrumb-item>
                            </el-breadcrumb>
                        </el-header>
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
                        <el-footer>
                            <div class="example-pagination-block">
                                <el-pagination layout="prev, pager, next" :total="1000" />
                            </div>
                        </el-footer>
                    </el-container>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
<script setup>
import { ChromeFilled } from '@element-plus/icons-vue';
import SideBar from "@/components/SideBar.vue";
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
const handleSelect = (key, keyPath) => {
    console.log(key, keyPath)
};
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
<style scoped>
.el-menu--horizontal>.el-menu-item:nth-child(1) {
    margin-right: auto;
}

.example-pagination-block+.example-pagination-block {
    margin-top: 10px;
}

.example-pagination-block .example-demonstration {
    margin-bottom: 16px;
}
</style>