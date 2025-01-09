<template>
  <div class="flex-row">
    <el-space>
      <el-avatar
        size="normal"
        src="/avatar_one.png"
        :avatar_url="avatar_url"
        :username="username"
        :email="email"
      />
      {{ username }} {{ email }}
    </el-space>
  </div>
</template>
<script setup>
import { ref } from 'vue'
 const avatarUrl = ref('/avatar_one.png')
 const username = ref('慕容紫英')
 const email = ref('murongziying@email.com')
</script>
<style scope>
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
