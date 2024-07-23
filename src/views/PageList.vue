<template>
    <div class="title_container">
        <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
            @select="handleSelect">
            <el-menu-item index="0">
                <img style="width: 100px" src="../assets/logo.svg" alt="Element logo" />
            </el-menu-item>
            <div class="flex-grow" />
            <el-menu-item index="1">loginPage</el-menu-item>
            <el-sub-menu index="2">
                <template #title>List Menu</template>
                <el-menu-item index="2-1">Setting List</el-menu-item>
                <el-menu-item index="2-2">Control List</el-menu-item>
                <el-menu-item index="2-3">Panel List</el-menu-item>
                <el-sub-menu index="2-4">
                    <template #title>BSP List</template>
                    <el-menu-item index="2-4-1"> one</el-menu-item>
                    <el-menu-item index="2-4-2"> two</el-menu-item>
                    <el-menu-item index="2-4-3"> three</el-menu-item>
                </el-sub-menu>
            </el-sub-menu>
        </el-menu>
    </div>



    <div class="button_container_group">
        <div class="switch_container">
            <div class="switch_button">
                <el-switch v-model="value2" color="#E0E0E0" />
            </div>
        </div>
        <div class="search_container">
            <div class="input_container">
                <el-input v-model="search_input" style="max-width: 600px" placeholder="Please input"
                    class="input-with-select">
                    <template #append>
                        <el-button :icon="Search" @click="handleSearch" />
                    </template>
                </el-input>
            </div>
        </div>
        <div class="group-container">
            <el-button-group>
                <el-button type="primary" color="#E0E0E0" :icon="Plus" @click="showDrawer" />
                <DrawerList></DrawerList>
                <el-button type="primary" color="#E0E0E0" :icon="Edit" />
                <el-button type="primary" color="#E0E0E0" :icon="Upload" />
                <el-button type="primary" color="#E0E0E0" :icon="Delete" />
            </el-button-group>

        </div>
    </div>



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
</template>
<script setup>

import { Delete, Edit, Search, Upload, Plus } from '@element-plus/icons-vue';
import DrawerList from "@/components/DrawerList.vue";
import { ref } from 'vue';
import { useDrawerStore } from '@/stores/drawer';
import axios from 'axios';
const search_input = ref();
const drawer = ref(false);
const value2 = ref(true);
const activeIndex = ref('1');
const handleSelect = () => { };
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
const handleSearch = () => {
    search()
};
const store = useDrawerStore();
const showDrawer = () => {
    store.drawerClick();
};
const search = async () => {
    const options = {
        method: 'GET',
        url: '/api/settings',
        params: { 'filters[setting_id][$contains]': search_input.value }
    };
    try { const { data } = await axios.request(options); console.log(data); }
    catch (error) { console.error(error); }
}
</script>
<style>
.flex-grow {
    flex-grow: 1;
}

.el-row:last-child {
    margin-bottom: 0;
}

.el-col {
    border-radius: 4px;
}

.grid-content {
    border-radius: 4px;
    min-height: 36px;
}

.button_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-start;
    text-align: center;
    width: 100%;
    padding: 10px 20px;
    margin-top: 10px;
}

.el-button {
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    margin-right: 55px;
    margin-left: 16px;
    margin-top: 20px;
    position: relative;
}

.input_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    padding-top: 17px;
    padding-bottom: 5px;
    /* width: 100%; */
    width: 100%;
    margin: 0 auto;
}

.el-input {
    margin-right: 15px;
}

.table_container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    /* width: 100%; */
    height: 250px;
}

.search_container.el-button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
}

.button_container_group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-right: auto;
}

.el-button-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
}

.search_container {
    display: flex;
    flex-wrap: nowrap;
    margin-left: 55px;
    margin-bottom: 20px;
}

.group-container {
    display: flex;
    flex-wrap: nowrap;
    margin-bottom: 30px;
}

.search_button {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
    margin-bottom: 15px;
}

.switch_container {
    margin-top: 20px;
    margin-left: 50px;
}

.el-switch {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
}
</style>
