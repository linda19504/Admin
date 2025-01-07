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
  avatar_url: { default: '/avatar_one.png'},
  username: { default: '玉置浩二' },
  email: { default: '(tamaki_hoji@email.com)' },
  size:{default: ''}
   
}) 
</script>
<style scope>
.flex-row {
    display: flex;
    flex-direction: row;
  }
</style>
 
