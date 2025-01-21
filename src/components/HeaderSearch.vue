<template>
  <div class="Search_demo">
    <el-tooltip effect="dark" bcontent="菜单搜索" placeholder="bottom">
      <el-icon class="bell header-icon" style="font-size: 22px" @click="handleSearch"
        ><Search
      /></el-icon>
    </el-tooltip>
    <el-dialog v-model="isShowSearch" width="600px" destroy-on-close :show-close="false">
      <el-select
        class="header-search-select"
        ref="headerSearchSelect"
        v-model="Search"
        title="Tips"
        width="500"
        placeholder="菜单搜索 ：支持菜单名称、路径"
        filterable
        remote
        style="width: 100%"
        :before-close="handleClose"
        :remote-method="querySearch"
        @change="change"
      >
        <el-option
          v-for="item in options"
          :key="item.items.path"
          :value="item.items.value"
          :label="item && item.item.title && item.item.title.length && item.item.title.join(' > ')"
        >
        </el-option>
      </el-select>
    </el-dialog>
  </div>
</template>
<script>
import { Search } from '@element-plus/icons-vue/dist/types'
import path from 'path-browserify'
import {fuse} from 'fuse.js'
import { computed, onMounted, ref, watch } from 'vue'
import {useRouter}from 'vue-router'

const router = userouter();
const fuse = ref(null);
const change =(val)=>{
  Search.value ="";
  isShowSearch.value=true;
  

 
}
export default {
  data() {
    return {
      content: '这是一个提示信息',
      placement: 'top'
    }
  }
}
</script>
<style>
.m-headerSearch {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s;
  .item-info-pop {
    display: flex;
    align-items: center;
  }
  .bell {
    color: black;
  }
  .item-child {
    display: flex;
    align-items: center;
    font-size: 13px;
  }
}
.transverseMenu {
  .bell {
    color: white;
  }
}
.header-search-select {
}
/* 菜单搜索样式 */
.m-headerSearch {
  :deep(.el-dialog) {
    .el-dialog__header {
      display: none;
    }
    .el-dialog__body {
      padding: 0;
    }
  }
  .header-search-select {
    height: 50px;
    :deep(.el-input__wrapper) {
      height: 50px;
    }
  }
}
</style>
