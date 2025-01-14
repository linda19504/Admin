<template>
  <div class="rich-text-page">
    <h1>富文本编辑器</h1>
    <RichTextEditor />
  </div>
</template>

<script setup>
import RichTextEditor from '@/components/RichTextEditor.vue'
</script>

<style scoped>
.rich-text-page {
  padding: 20px;
  height: 100%;
}

h1 {
  margin-bottom: 20px;
  font-size: 24px;
  font-weight: bold;
}
</style>