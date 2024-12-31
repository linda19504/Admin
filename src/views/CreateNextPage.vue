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
              <TheAvatar :size="50" :avatar_url="userInfo.avatar_url" />
              <el-text>{{ userInfo.username }}</el-text>
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
                  {{ 4 === 'other' ? '当前角色' : '切换角色' }}：普通用户
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
              <div aria-label="A complete example of page header">
                <el-page-header @back="onBack">
                  <template #content>
                    <div class="flex items-center">
                      <span class="text-large font-600 mr-3"> HOST_NAME </span>
                      <span class="text-sm mr-2" style="color: var(--el-text-color-regular)">
                        {{ HOME_MAIN.HOSTNAME }}
                      </span>
                      <el-tag>{{ HOME_MAIN.START_ONE }}</el-tag>
                    </div>
                  </template>
                  <template #extra>
                    <div class="flex items-center">
                      <el-button>{{ HOME_MAIN.RESET_ONE }}</el-button>
                      <el-button>{{ HOME_MAIN.START_ONE }}</el-button>
                      <el-button type="primary" class="ml-2">{{ HOME_MAIN.SAVE }}</el-button>
                      <el-button type="primary" class="ml-2" @click="dialogVisible = true">{{
                        HOME_MAIN.SUBMIT_ONE
                      }}</el-button>
                      <el-button type="primary" class="ml-2">{{ HOME_MAIN.CREATE_ONE }}</el-button>
                    </div>
                  </template>
                </el-page-header>
              </div>
            </el-header>
            <el-main>
              <br />
              <el-form :model="formInline" class="demo-form-inline" label-position="top">
                <el-row :gutter="20">
                  <el-col :span="8">
                    <el-form-item label="SETTING ID">
                      <el-input
                        v-model="formInline.user"
                        placeholder="HOST_NAME"
                        clearable
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="名称">
                      <el-input
                        v-model="formInline.name"
                        placeholder="主机名"
                        clearable
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="数据类型">
                      <el-select
                        v-model="formInline.string"
                        placeholder="Short String"
                        clearable
                        style="width: 100%"
                      >
                        <el-option label="INT8" value="INT8" />
                        <el-option label="INT16" value="INT16" />
                        <el-option label="UINT16" value="UINT16" />
                        <el-option label="UINT32" value="UINT32" />
                      </el-select>
                    </el-form-item>
                  </el-col>
                </el-row>

                <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top"
                                label-width="auto"> -->
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="描述">
                      <el-input
                        v-model="formInline.description"
                        placeholder="主机名"
                        clearable
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>

                <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top"> -->
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="初始值">
                      <el-input
                        v-model="formInline.originValue"
                        placeholder="Pantum Printer"
                        clearable
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
                <!-- <el-form :inline="true" :model="formInline" class="demo-form-inline" label-position="top"> -->
                <el-row :gutter="20">
                  <el-col :span="24">
                    <el-form-item label="校验规则">
                      <el-input
                        v-model="formInline.checkRules"
                        placeholder="[A_Z] [A-Z_0-9]"
                        clearable
                        style="width: 100%"
                      />
                    </el-form-item>
                  </el-col>
                </el-row>
              </el-form>
            </el-main>
            <el-footer> </el-footer>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
    <Dialog v-model="dialogVisible" @cancelDialog="handleCancel" @confirmDialog="handleConfirm">
    </Dialog>
  </div>
</template>
<script setup>
import { ref, reactive, computed } from 'vue'
import { useUserStore } from '@/stores/userinfo.js'
import SideBar from '@/components/SideBar.vue'
import Dialog from '@/components/Dialog.vue'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import { ElNotification as notify } from 'element-plus'
import TheAvatar from '@/components/TheAvatar.vue'
import PersonalDialog from '@/components/PersonalDialog.vue'
const props = defineProps({
  model_id: {
    type: Number,
    default: ''
  }
})
// const options = {
//     methods: "get",
//     url: `api/models/${model_id}`
// }
const userStore = useUserStore()
const userInfo = computed(() => userStore.userInfo)
const handleSelect = (key, keyPath) => {
  console.log(key, keyPath)
}
const onBack = () => {
  notify('Back')
}
const onSubmit = () => {
  console.log('submit!')
}
const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  },
  {
    date: '2016-05-03',
    name: 'Tom',
    state: 'California',
    city: 'Los Angeles',
    address: 'No. 189, Grove St, Los Angeles',
    zip: 'CA 90036'
  }
]
const formInline = reactive({
  user: '',
  name: '',
  string: '',
  description: '',
  originValue: '',
  checkRules: ''
})
const dialogVisible = ref(false)
const handleCancel = () => {
  dialogVisible.value = false
}
const handleConfirm = () => {
  dialogVisible.value = false
}
// const openDialog = ()=>{
//     dialogVisible.value = true;
// };
</script>
<style scoped>
.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: end;
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
