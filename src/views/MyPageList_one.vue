<template>
  <div class="common-layout fullscreen">
    <el-container class="h-max">
      <!-- <el-header>
                <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" :ellipsis="false"
                    @select="handleSelect">
                    <el-menu-item index="0">
                        <el-icon>
                            <ChromeFilled />
                        </el-icon>
                        <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
                    </el-menu-item>
                    <el-menu-item>
                        
                    </el-menu-item>
                    <el-menu-item index="1">{{ HOME_MAIN.MAIN_PAGE }}</el-menu-item>
                    <el-sub-menu index="2">
                        <template #title>{{ HOME_MAIN.LOG }}</template>
                        <el-menu-item index="2-1">{{ HOME_MAIN.LOG_IN }}</el-menu-item>
                        <el-menu-item index="2-2">{{ HOME_MAIN.LOG_OUT }}</el-menu-item>
                    </el-sub-menu>
                </el-menu>   
            </el-header> -->
      <el-header>
        <el-menu
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          :ellipsis="false"
          @select="handleSelect"
        >
          <el-menu-item index="0">
            <!-- <el-icon>
            <ChromeFilled />
          </el-icon> -->
            <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
          </el-menu-item>
          <!-- <el-menu-item index="1">{{ HOME_MAIN.MAIN_PAGE }}</el-menu-item> -->
          <!-- <el-menu-item index="1">{{ HOME_MAIN.ADMIN }}</el-menu-item> -->
          <el-dropdown>
            <span class="el-dropdown-link">
              <TheAvatar 
              :size="50" 
              :avatar_url="userInfo.avatar_url" 
              :username="userInfo.username"
              :email="userInfo.email"
              :showName="false" 
              />
              <!-- <el-text>{{ userInfo.username }}</el-text> -->
              <el-icon class="header-icon el-icon--right">
                <arrow-down />
              </el-icon>
            </span>
            <template #dropdown>
              <el-dropdown-menu>
                <el-dropdown-item :command="0" @click="switchRolesAction('admin')">
                  {{ currentRoles === 'admin' ? '当前角色' : '切换角色' }}：管理员
                </el-dropdown-item>
                <el-dropdown-item :command="0" divided @click="switchRolesAction('other')">
                  {{ currentRoles === 'other' ? '当前角色' : '切换角色' }}：普通用户
                </el-dropdown-item>
                <el-dropdown-item :command="3" divided @click="modifyPassword">
                  <el-icon><Edit /></el-icon>修改密码
                </el-dropdown-item>
                <el-dropdown-item :command="4" divided @click="logOut">
                  <el-icon><SwitchButton /></el-icon>退出登录
                </el-dropdown-item>
              </el-dropdown-menu>
            </template>
          </el-dropdown>
          <PersonalDialog ref="person" />
        </el-menu>
        <el-icon class="header-icon" name="el-icon-arrow-down"></el-icon>
      </el-header>
      <el-container class="h-max">
        <SideBar></SideBar>
        <el-main>
          <el-container>
            <el-header>
              <TheBreadcrumb></TheBreadcrumb>
              <br />
            </el-header>
            <el-main>
              <br />
            </el-main>
            <el-footer> </el-footer>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
    <Dialog v-model="dialogVisible" @cancelDialog="handleCancel" @confirmDialog="handleConfirm">
    </Dialog>
  </div>

  <!-- <div class="title_container">
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
    </div> -->
  <!-- <div class="button_container_group">
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
    </div> -->
  <!-- <div class="table_container">
        <el-table :data="tableData" border>
            <el-table-column fixed prop="date" label="Date" width="150" />
            <el-table-column prop="name" label="Name" width="120" />
            <el-table-column prop="state" label="State" width="120" />
            <el-table-column prop="city" label="City" width="320" />
            <el-table-column prop="address" label="Address" width="600" />
            <el-table-column prop="zip" label="Zip" width="600" />
        </el-table>
    </div> -->
  <!-- <TheTooltip> -->
  <!-- <Modal :handleClose="closeModal">
        <TheEditing></TheEditing>
    </Modal> -->
  <!-- </TheTooltip> -->
</template>

<script setup>
// import { useI18n } from 'vue-i18n';
// import { Delete, Edit, Search, Upload, Plus } from '@element-plus/icons-vue';
// // import DrawerList from "@/components/DrawerList.vue";
// import { ref } from 'vue';
// import { useDrawerStore } from '@/stores/drawer';
// import { usePopupStore } from '@/stores/popup';
// import axios from 'axios';

import { ref, reactive, computed } from 'vue'
import { useUserStore } from '@/stores/modules/userinfo.js'
import SideBar from '@/components/SideBar.vue'
import Dialog from '@/components/Dialog.vue'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import { ElNotification as notify } from 'element-plus'
import TheAvatar from '@/components/TheAvatar.vue'
import PersonalDialog from '@/components/PersonalDialog.vue'
import { Edit, SwitchButton } from '@element-plus/icons-vue'
import { ElMessage, ElMessageBox } from 'element-plus'

const dialogVisible = ref(false)
const handleCancel = () => {
  dialogVisible.value = false
}
const handleConfirm = () => {
  dialogVisible.value = false
}
const logOut = async () => {
  ElMessageBox.confirm('您是否确认退出登录?', '温馨提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(async () => {
      await UserStore.logout()
      await router.push({ path: '/LoginPage' })
      TagsViewStore.clearVisitedView()
      // PermissionStore.clearRoutes()
      ElMessage({
        type: 'success',
        message: '退出登录成功！'
      })
    })
    .catch(() => {})
}
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const person = ref ()
const modifyPassword = () => {
  person.value.show()
}
// const { t } = useI18n();
// const search_input = ref();
// const drawer = ref(false);
// const popup = ref(false);
// const close = ref(false);
// const value2 = ref(true);
// const activeIndex = ref('1');
// const handleSelect = () => { };
// const handleSearch = () => {
//     search()
// };
// const store = useDrawerStore();
// const popupStore = usePopupStore();
// // const closeStore = useCloseStore();

// const showDrawer = () => {
//     store.drawerClick();
// };
// const closeModal = () => {
//     popupStore.popupClose();
//     console.log("close")
// };
// const showModal = () => {
//     popupStore.popupClick();
//     console.log("popup")
// };
// const search = async () => {
//     const options = {
//         method: 'GET',
//         url: '/api/settings',
//         params: { 'filters[setting_id][$contains]': search_input.value }
//     };
//     try { const { data } = await axios.request(options); console.log(data); }
//     catch (error) { console.error(error); }
// }
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

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
  border:none;
}
.title_name {
  font-family: 'Arial', sans-serif;
  font-size: 1.5em;
  font-weight: bold;
  line-height: 3.5;
  color: #5b5a5a;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}

.example-pagination-block + .example-pagination-block {
  margin-top: 10px;
}

.example-pagination-block .example-demonstration {
  margin-bottom: 16px;
}

.demo-form-inline .el-input {
  --el-input-width: 220px;
}

.demo-form-inline .el-select {
  --el-select-width: 220px;
}
</style>
