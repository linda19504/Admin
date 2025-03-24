<template>
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
              <el-icon> <Edit /> </el-icon>修改密码
            </el-dropdown-item>
            <el-dropdown-item :command="4" divided @click="logOut">
              <el-icon> <SwitchButton /> </el-icon>退出登录
            </el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
      <PersonalDialog ref="person" />
      <!-- <el-menu-item>
        <template #title>
          <MoreButton />
        </template>
      </el-menu-item> -->
    </el-menu>
    <!-- <el-icon class="header-icon" name="el-icon-arrow-down"></el-icon> -->
  </el-header>
  <el-container class="h-max">
    <SideBar></SideBar>
    <el-main>
      <el-container>
        <el-header>
          <!-- <TheBreadcrumb></TheBreadcrumb> -->
          <br />
          <a
            ><label class="info">{{ HOME_MAIN.MY_SUBMIT }}</label></a
          >
        </el-header>
        <el-main>
          <div class="submit_bar">
            <div class="refresh_bar">
              <el-button @click="handleRefresh">
                <el-icon><Refresh /></el-icon>
                刷新
              </el-button>
            </div>
            <div class="search_bar">
              <el-form :inline="true" :model="searchQuery">
                <el-form-item label="主机名">
                  <el-input v-model="handleSearch" placeholder="请输入主机名" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="onSubmit">搜索</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px"
            height="200"
            row-key="id"
            border
          >
            <el-table-column prop="label" label="接口" sortable min-width="150" />
            <el-table-column prop="name" label="名字" width="130" />
            <el-table-column prop="stringName" label="数据类型" width="150" />
            <el-table-column prop="description" label="描述" width="380" />
            <el-table-column label="Tags" sortable width="120">
              <template #default="{ row }">
                <el-tag :key="row.states">{{ row.states }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createDate" label="创建时间" sortable width="110" />
            <el-table-column prop="latestUpdate" label="最后更新" sortable width="110" />
            <el-table-column prop="creator" label="创建者" sortable width="110" />
            <el-table-column prop="approver" label="审批者" sortable width="110" />
            />
          </el-table>
        </el-main>
        <a
          ><label class="info_one">{{ HOME_MAIN.MY_PROFILE }}</label></a
        >
        <el-main>
          <div class="submit_bar">
            <div class="refresh_bar">
              <el-button @click="handleRefresh">
                <el-icon><Refresh /></el-icon>
                刷新
              </el-button>
            </div>
            <div class="search_bar">
              <el-form :inline="true">
                <el-form-item label="主机名">
                  <el-input v-model="searchQuery" placeholder="请输入主机名" />
                </el-form-item>
                <el-form-item>
                  <el-button type="primary" @click="handleSearch">搜索</el-button>
                </el-form-item>
              </el-form>
            </div>
          </div>
          <el-table
            :data="tableData"
            style="width: 100%; margin-bottom: 20px"
            row-key="id"
            border
            height="200"
          >
            <el-table-column prop="label" label="接口" sortable min-width="150" />
            <el-table-column prop="name" label="名字" width="130" />
            <el-table-column prop="stringName" label="数据类型" width="150" />
            <el-table-column prop="description" label="描述" width="380" />
            <el-table-column label="Tags" sortable width="120">
              <template #default="{ row }">
                <el-tag :key="row.states">{{ row.states }}</el-tag>
              </template>
            </el-table-column>
            <el-table-column prop="createDate" label="创建时间" sortable width="110" />
            <el-table-column prop="latestUpdate" label="最后更新" sortable width="110" />
            <el-table-column prop="creator" label="创建者" sortable width="110" />
            <el-table-column prop="approver" label="审批者" sortable width="110" />
          </el-table>
        </el-main>
        <el-footer> </el-footer>
      </el-container>
    </el-main>
  </el-container>
</template>
<script setup>
// import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import SideBar from '@/components/SideBar.vue'
import PersonalDialog from '@/components/PersonalDialog.vue'
import { useRouter } from 'vue-router'
import { ref, reactive, computed } from 'vue'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'
import TheAvatar from '@/components/TheAvatar.vue'
import { ElMessage, ElMessageBox, resultProps } from 'element-plus'
import { useUserStore } from '@/stores/modules/userinfo.js'
import axios from 'axios'
// import fuse from'fuse.js'
// import { Timer } from '@element-plus/icons-vue'

const router = useRouter()
const UserStore = useUserStore()
const userInfo = computed(() => UserStore.userInfo)
const loading = ref(false)
const isLoading =ref()
const person = ref()
const searchQuery = ref()
const handleSearch =async()=>{
  if(searchQuery.value.trim ==='')
  searchQuery.value=[]
}
isLoading.value = true;
try{
const response = await axios.get('api/search',{
  params:{
    query:searchQuery.value
  },
})
result.value = response.data
}catch(error){
  console.error('搜索失败', error);
  results.value = [];
}

const onSubmit = () => {
  console.log('submit!')
  loading.value = true
  setTimeout(() => {
    loading.value = false
  }, 500)
}
const handleRefresh = () => {
  windows.location.reload()
}
// const load = (row, treeNode, resolve) => {
//   setTimeout(() => {
//     resolve([
//       {
//         id: 31,
//         date: '2016-05-01',
//         name: 'wangxiaohu',
//         address: 'No. 189, Grove St, Los Angeles'
//       },
//       {
//         id: 32,
//         date: '2016-05-01',
//         name: 'wangxiaohu',
//         address: 'No. 189, Grove St, Los Angeles'
//       }
//     ])
//   }, 1000)
// }

const tableData = [
  {
    id: 1,
    label: '设定项-新增',
    name: '主机名',
    stringName: 'Short Srting',
    description: '主机名',
    states: '已批准',
    createDate: '2023-8-14',
    latestUpdate: '2023-10-15',
    creator: '我',
    approver: '关公'
  },
  {
    id: 2,
    label: '设定项-修改',
    name: 'Ipv4地址',
    stringName: 'Short Srting',
    description: '主机名',
    states: '已批准',
    createDate: '2023-8-14',
    latestUpdate: '2023-10-15',
    creator: '我',
    approver: '项羽'
  },
  {
    id: 3,
    label: '设定项-新增',
    name: 'Ipv6地址',
    stringName: 'Short Srting',
    description: '主机名',
    states: '已批准',
    createDate: '2023-8-14',
    latestUpdate: '2023-10-15',
    creator: '我',
    approver: '项羽'
  },
  {
    id: 4,
    label: '设定项-修改',
    name: 'Ipv4地址',
    stringName: 'Short Srting',
    description: '主机名',
    states: '已批准',
    createDate: '2023-8-14',
    latestUpdate: '2023-10-15',
    creator: '我',
    approver: '项羽'
  }
  // {
  //   id: 3,
  //   date: '2016-05-01',
  //   name: 'wangxiaohu',
  //   address: 'No. 189, Grove St, Los Angeles',
  //   children: [
  //     {
  //       id: 31,
  //       date: '2016-05-01',
  //       name: 'wangxiaohu',
  //       address: 'No. 189, Grove St, Los Angeles',
  //     },
  //     {
  //       id: 32,
  //       date: '2016-05-01',
  //       name: 'wangxiaohu',
  //       address: 'No. 189, Grove St, Los Angeles',
  //     },
  //   ],
  // },
]

const tableData1 = [
  {
    id: 1,
    date: '2016-05-02',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    id: 2,
    date: '2016-05-04',
    name: 'wangxiaohu',
    address: 'No. 189, Grove St, Los Angeles'
  }
]
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
const currentRoles = computed({
  get() {
    return UserStore.roles[0]
  },
  set(val) {
    ;(async () => {
      await UserStore.getInfo([val])
      router.push({
        path: '/'
      })
      location.reload()
    })()
  }
})
const modifyPassword = () => {
  person.value.show()
}
</script>
<style scoped>
.info_one {
  padding-left: 20px;
}
.submit_bar {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: start;
}
.refresh_bar {
  padding-right: 15px;
}
.right-btn {
  height: 100%;
  flex-shrink: 0;
}

.span {
  display: flex;
  justify-content: flex-end;
  margin-right: 6px;
}

.el-dropdown-link {
  cursor: pointer;
  display: flex;
  align-items: center;
  outline: none;
  border: none;
}

.el-dropdown {
  margin-right: 15px;
  justify-content: flex-end;
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
