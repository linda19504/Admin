<template>
  <div class="flex-row">
    <el-space>
      <el-avatar size="normal" :src="avatar_url" />
      <template v-if="showName"> {{ username }} {{ email }} </template>
    </el-space>
  </div>
</template>
<script setup>
const props = defineProps({
  avatar_url: {
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
  },
  showName: {
    type: Boolean,
    default: true
  }
});
</script>
<style scope>
.flex-row {
  display: flex;
  flex-direction: row;
}
</style>
