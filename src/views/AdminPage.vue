<template>
  <el-container class="h-max">
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
      <div class="right-btn">
        <MoreButton />
      </div>
    </el-header>
    <el-container class="h-max">
      <SideBar></SideBar>
      <el-main>
        <el-container>
          <el-header>
            <TheBreadcrumb></TheBreadcrumb>
          </el-header>
          <el-main>
            <TheDescription></TheDescription>
          </el-main>
          <el-footer> </el-footer>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { useRouter } from 'vue-router'
import { ref, computed } from 'vue'
import { useUserStore } from '@/stores/userinfo.js'
import { Edit, SwitchButton } from '@element-plus/icons-vue'
import SideBar from '@/components/SideBar.vue'
import TheBreadcrumb from '@/components/TheBreadcrumb.vue'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'
import TheDescription from '@/components/TheDescription.vue'
import TheAvatar from '@/components/TheAvatar.vue'
import { ElMessage, ElMessageBox } from 'element-plus'
import { useTagsViewStore } from '@/stores/tagsView.js'
import PersonalDialog from '@/components/PersonalDialog.vue'
const router = useRouter()
const person = ref()
const UserStore = useUserStore()
const TagsViewStore = useTagsViewStore()
const userInfo = computed(() => UserStore.userInfo)
const modifyPassword = () => {
  person.value.show()
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
</script>
<style scoped>
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
