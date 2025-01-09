<template>
  <div class="flex-row">
    <el-space>
      <el-avatar size="normal" :src="avatarUrl"/>
      {{ username }} ({{ email }})
    </el-space>
  </div>
</template>

<script setup>
const props = defineProps({
  avatarUrl: {
    type: String,
    default: ''
  },
  username: {
    type: String,
    default: ''
  },
  email: {
    type: String,
    default: ''
  }
})
</script>
<style scope>
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
