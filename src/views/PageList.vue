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
                <el-menu-item index="2-1">{{ t('Setting_List') }}</el-menu-item>
                <el-menu-item index="2-2">{{ t('Control_List') }}</el-menu-item>
                <el-menu-item index="2-3">{{ t('Panel_List') }}</el-menu-item>
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
                <el-button type="primary" color="#E0E0E0" :icon="Plus" @click="showDrawer">
                    <DrawerList></DrawerList>
                </el-button>
                <el-button type="primary" color="#E0E0E0" :icon="Edit" @click="showModal">

                </el-button>
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
    <!-- <TheTooltip> -->
    <Modal :handleClose="closeModal"></Modal>
    <!-- </TheTooltip> -->
</template>
<script setup>
import { useI18n } from 'vue-i18n';
import { Delete, Edit, Search, Upload, Plus } from '@element-plus/icons-vue';
import DrawerList from "@/components/DrawerList.vue";
import Modal from '@/components/Modal.vue';
import TheTooltip from '@/components/TheTooltip.vue';
import { ref } from 'vue';
import { useDrawerStore } from '@/stores/drawer';
import { usePopupStore } from '@/stores/popup';
import { useCloseStore } from '@/stores/close';

import axios from 'axios';
const { t } = useI18n();
const search_input = ref();
const drawer = ref(false);
const popup = ref(false);
const close = ref(false);
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
const popupStore = usePopupStore();
// const closeStore = useCloseStore();

const showDrawer = () => {
    store.drawerClick();
};
const closeModal = () => {
    popupStore.popupClose();
    console.log("close")
};
const showModal = () => {
    popupStore.popupClick();
    console.log("popup")
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
    width: 100%;
    margin: 0 auto;
    /* width: 100%;
    padding: 12px;
    padding-left: 36px;

    background: #f1f1f1;
    border-radius: 14px;
    border: none;
    position: relative; */
}

.el-input {
    margin-right: 15px;
}

.button_container_group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
}

.el-button-group {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    justify-content: flex-end;
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
