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
          <router-link to="/">
          <span class="title_name">{{ HOME_MAIN.TITLE }}</span></router-link>
        </el-menu-item>
        <!-- <sidebar></sidebar> -->
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
            <!-- <el-text>{{ userInfo.Info }}</el-text> -->
            <el-icon class="header-icon el-icon--right">
              <arrow-down />
            </el-icon>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item :command="0" @click="switchRolesAction('admin')">
                {{ currentRoles === "admin" ? "当前角色" : "切换角色" }}：管理员
              </el-dropdown-item>
              <el-dropdown-item :command="0" divided @click="switchRolesAction('other')">
                {{ 4 === "other" ? "当前角色" : "切换角色" }}：普通用户
              </el-dropdown-item>
              <el-dropdown-item :command="3" divided @click="modifyPassword">
                <el-icon>
                  <Edit /> </el-icon
                >修改密码
              </el-dropdown-item>
              <el-dropdown-item :command="4" divided @click="logOut">
                <el-icon>
                  <SwitchButton /> </el-icon
                >退出登录
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
    </el-header>
    <el-container class="h-max">
      <SideBar></SideBar>
      <el-main>
        <el-container>
          <el-header>
            <TheBreadcrumb></TheBreadcrumb>
          </el-header>
          <el-main>
            <TheDescription
              :size="descriptionData.size"
              :create_date="descriptionData.create_date"
              :last_updated_date="descriptionData.last_updated_date"
              :creater="descriptionData.creater"z
              :approvers="descriptionData.approvers"  
              :descriptionItems="descriptionData.descriptionItems"
            ></TheDescription>
            <br />
            <TimelineList
              :activities="descriptionData.timelineActivities"
              :size="descriptionData.size"
            />
            <!-- <RouterView></RouterView> -->
          </el-main>
          <el-footer> </el-footer>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { useRouter } from "vue-router";
import { ref, computed } from "vue";
import { useUserStore } from "@/stores/modules/userinfo.js";
import { Edit, SwitchButton } from "@element-plus/icons-vue";
import SideBar from "@/components/SideBar.vue";
import TheBreadcrumb from "@/components/TheBreadcrumb.vue";
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
import TheDescription from "@/components/TheDescription.vue";
import TheAvatar from "@/components/TheAvatar.vue";
import { ElMessage, ElMessageBox } from "element-plus";
import { useTagsViewStore } from "@/stores/modules/tagsView.js";
import PersonalDialog from "@/components/PersonalDialog.vue";
import { storeToRefs } from "pinia";
// import MoreButton from '@/components/MoreButton.vue'
import TimelineList from "@/components/TimelineList.vue";

// 新增的数据
const descriptionData = ref({
  size: "default",
  create_date: "2023年10月7日",
  last_updated_date: "2024年1月7日",
  creater: {
    avatar_url: "avatar_one.png",
    username: "慕容紫英",
    email: "murong_ziying@gmail.coms",
  },
  approvers: {
    avatar_url: "avatar_two.jpg",
    username: "玉置浩二",
    email: "yuzhi_hasoer@gmail.coms",
  },
  descriptionItems: [
    { label: 'Setting_ID', value: 'HOST_NAME', icon: 'User' },
    { label: '名称', value: '主机名' },
    { label: '数据类型', value: 'Short String' },
    { label: '描述', value: '主机名' },
    { label: '初始值', value: 'Pantum Printer', span: 4 },
    { label: '校验规则', value: '[A-Z][A-Z_0-9]*', span: 4 }
  ],
  // 新增时间轴活动数组
  timelineActivities: [
    {
      timestamp: "2023-01-01",
      avatar_url: "/avatar_one.png",
      username: "玉置浩二",
      email: "tamaki_hoji@email.com",
    },
    {
      timestamp: "2023-02-01",
      avatar_url: "/avatar_two.jpg",
      username: "山口百惠",
      email: "Yamaguchi Yuuko@email.com",
    },
    {
      timestamp: "2023-03-01",
      avatar_url: "/avatar_three.jpg",
      username: "小野丽莎",
      email: "Ono Risa@email.com",
    },
  ],
});

const router = useRouter();
const person = ref();
const UserStore = useUserStore();
const TagsViewStore = useTagsViewStore();
const { userInfo } = storeToRefs(UserStore);
const modifyPassword = () => {
  person.value.show();
};
const currentRoles = computed({
  get() {
    return UserStore.roles[0];
  },
  set(val) {
    (async () => {
      await UserStore.getInfo([val]);
      router.push({
        path: "/",
      });
      location.reload();
    })();
  },
});
const logOut = async () => {
  ElMessageBox.confirm("您是否确认退出登录?", "温馨提示", {
    confirmButtonText: "确定",
    cancelButtonText: "取消",
    type: "warning",
  })
    .then(async () => {
      await UserStore.logout();
      await router.push({ path: "/LoginPage" });
      TagsViewStore.clearVisitedView();
      // PermissionStore.clearRoutes()
      ElMessage({
        type: "success",
        message: "退出登录成功！",
      });
    })
    .catch(() => {});
};
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
  font-family: "Arial", sans-serif;
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
