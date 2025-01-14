<template>
  <div class="rich-text-editor">
    <quill-editor
      v-model:content="content"
      :options="editorOption"
      contentType="html"
    />
  </div>
</template>

<script setup>
import { defineModel } from 'vue'
import { QuillEditor } from '@vueup/vue-quill'
import '@vueup/vue-quill/dist/vue-quill.snow.css'

const content = defineModel({
  type: String,
  default: ''
})

const editorOption = {
  theme: 'snow',
  modules: {
    toolbar: [
      ['bold', 'italic', 'underline', 'strike'],
      ['blockquote', 'code-block'],
      [{ header: 1 }, { header: 2 }],
      [{ list: 'ordered' }, { list: 'bullet' }],
      [{ script: 'sub' }, { script: 'super' }],
      [{ indent: '-1' }, { indent: '+1' }],
      [{ direction: 'rtl' }],
      [{ size: ['small', false, 'large', 'huge'] }],
      [{ header: [1, 2, 3, 4, 5, 6, false] }],
      [{ color: [] }, { background: [] }],
      [{ font: [] }],
      [{ align: [] }],
      ['clean'],
      ['link', 'image', 'video']
    ]
  }
}
</script>

<style scoped>
.rich-text-editor {
  width: 100%;
  height: 100%;
}

:deep(.ql-container) {
  height: calc(100% - 42px);
}  
.rich-text-editor {
    z-index: 99;
    width: 100%;
    border: 1px solid #cccccc;
    .editor-toolbar {
      border-bottom: 1px solid #cccccc;
    }
    .editor-content {
      overflow-y: hidden;
    }
  }
</style>