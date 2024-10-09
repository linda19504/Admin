<template>
  <div class="flex-row">
   <el-space>
    <el-avatar 
    :icon="UserFilled" 
    size="small" 
    :src="avatar_url"
    :size="size"
    />
    {{ username }} {{ email }}
   </el-space>
  </div>
</template>
<script setup>
import { UserFilled } from '@element-plus/icons-vue'
defineProps({
  avatar_url: { default: '' },
  username: { default: '' },
  email: { default: '' },
  size:{default: ''}
   
})
</script>
<style scope>
.flex-row {
    display: flex;
    flex-direction: row;
  }
</style>
 
