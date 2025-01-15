<template>
    <div class="app-container">
      <div class="app-container-inner">
        <el-form ref="formRef" :model="dynamicValidateForm" label-width="80px" class="demo-dynamic">
          <el-form-item prop="title" label="标题" :rules="[{ required: true, message: '请输入标题', trigger: 'blur' }]">
            <el-input v-model="dynamicValidateForm.title" />
          </el-form-item>
          <el-form-item prop="content" label="内容" :rules="[{ required: true, message: '请输入内容', trigger: 'blur' }]">
            <WangEditor  v-model="dynamicValidateForm.content" />
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submitForm(formRef)">保存</el-button>
            <el-button type="primary" @click="preview(formRef)">预览</el-button>
            <el-button @click="resetForm(formRef)">重置</el-button>
          </el-form-item>
        </el-form>
        <el-dialog v-model="dialogVisible" title="预览" width="60%">
          <div style="display: flex; align-items: center; margin-bottom: 20px">
            <span style="width: 50px; font-weight: bold">标题：</span>
            <div>{{ dynamicValidateForm.title }}</div>
          </div>
          <div style="display: flex; align-items: center; margin-bottom: 20px">
            <span style="width: 50px; font-weight: bold">内容</span>
            <div v-html="dynamicValidateForm.content"></div>
          </div>
          <template #footer></template>
        </el-dialog>
      </div>
    </div>
  </template>
  
  <script setup>
  import { reactive, ref } from 'vue'
  import { ElMessage } from 'element-plus'
  import WangEditor from '@/components/WangEditor/index.vue'
  
  const formRef = ref()
  const dialogVisible = ref(false)
  const dynamicValidateForm = reactive
  ({
    title: '',
    content: '',
  })

  const submitForm = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
      console.log('valid', valid)
      if (valid) {
        ElMessage.success('保存成功')
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const preview = (formEl) => {
    if (!formEl) return
    formEl.validate((valid) => {
      console.log('valid', valid)
      if (valid) {
        dialogVisible.value = true
      } else {
        console.log('error submit!')
        return false
      }
    })
  }

  const resetForm = (formEl) => {
    if (!formEl) return
    formEl.resetFields()
  }
  </script>
