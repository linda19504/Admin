<template>
  <div class="m-wangEditor">
    <Toolbar 
    style="border-bottom: 1px solid #ccc" 
    :editor="editorRef" 
    :default-config="toolbarConfig"
    :mode="mode" />
    <Editor
      v-model="valueHtml"
      class="editor-content'"
      style="height: 300px; overflow-y: hidden"
      :default-config="editorConfig"
      :mode="mode"
      @on-created="handleCreated"
    />
  </div>
</template>
<script lang="ts" setup>
  // 引入 wangEditor
  import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
  import '@wangeditor/editor/dist/css/style.css' 
  import { onBeforeUnmount,shallowRef, ref, computed } from 'vue'
  let editors = null
  const editorRef = shallowRef()
  const toolbarConfig = {}
  const editorConfig = { placeholder: '请输入内容...' }
  const html = ref()
  const mode = ref('default')
  let emit = defineEmits(['update:modelValue'])
  let props = defineProps({
    modelValue: String,
  })

  const getEditorData = () => {
    // 通过代码获取编辑器内容
    let data = editors.txt.html()
    alert(data)
  }
b
  const handleCreated = (editor) => {
    editorRef.value = editor 
  }

  const valueHtml = computed({
    get() {
      return props.modelValue
    },
    set(val) {
      // 防止富文本内容为空时，校验失败
      if (editorRef.value.isEmpty()) val = ''
      emit('update:modelValue', val)
    },
  })

  // 组件销毁时，也及时销毁编辑器
  onBeforeUnmount(() => {
    // 调用销毁 API 对当前编辑器实例进行销毁
    const editor = editorRef.value
    if (editor == null) {
      return
    }
    editor.destroy()
  })
</script>
<style lang="scss" scoped>
  .m-wangEditor {
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
