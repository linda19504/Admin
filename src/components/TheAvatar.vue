<template>
  <div class="flex-row">
    <el-space>
      <el-avatar size="normal" :src="avatar_url"/>
      {{ username }} {{ email }}
    </el-space>
  </div>
</template>
<script setup>
const props = defineProps(["avatar_url", "username", "email"])
</script>
<style scope>
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
