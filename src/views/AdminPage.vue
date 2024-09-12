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
          <el-icon>
            <ChromeFilled />
          </el-icon>
          <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
        </el-menu-item>
        <el-menu-item index="1">{{ HOME_MAIN.MAIN_PAGE }}</el-menu-item>
        <el-sub-menu index="2">
          <template #title>{{ HOME_MAIN.LOG }}</template>
          <el-menu-item index="2-1">{{ HOME_MAIN.LOG_IN }}</el-menu-item>
          <el-menu-item index="2-2">{{ HOME_MAIN.LOG_OUT }}</el-menu-item>
        </el-sub-menu>
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
            <TheDescription></TheDescription>
          </el-main>
          <el-footer> </el-footer>
        </el-container>
      </el-main>
    </el-container>
  </el-container>
</template>
<script setup>
import { ref, reactive } from 'vue';
import { ChromeFilled } from '@element-plus/icons-vue';
import SideBar from "@/components/SideBar.vue";
import TheBreadcrumb from '@/components/TheBreadcrumb.vue';
import { HOME_MAIN } from "@/constants/MainPage.constants.js";
import TheDescription from '@/components/TheDescription.vue';
const formInline = reactive({
    user: '',
});
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

.demo-form-inline .el-input {
    --el-input-width: 220px;
}

.demo-form-inline .el-select {
    --el-select-width: 220px;
}
</style>