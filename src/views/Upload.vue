<template>
    <div>
    <h1>UploadDemo</h1>
    <Upload
      v-model="fileList"
      @update="handleUpdate"  
      @upload-success="handleUploadSuccess"
      @upload-error="handleUploadError"
    />
    <div v-if="fileList.length > 0">
      <h2>已上传文件：</h2>
      <ul>
        <li v-for="(file, index) in fileList" :key="index">
          {{ file.name }} - {{ file.url ? "已上传" : "上传中..." }}
        </li>
      </ul>
    </div>

  </div>
  
  </template>
  
  <script setup>
 import Upload from '@/components/Upload.vue'
 import { ref } from 'vue'
 const  fileList = ref([])
 const handleUpdate = (newFileList) => {
  fileList.value = newFileList;
};
const handleUploadSuccess = (file) => {
  console.log("上传成功:", file);
  ElMessage.success(`${file.name} 上传成功！`); 
};
const handleUploadError = (file) => {
  console.error("上传失败:", file);
  ElMessage.error(`${file.name} 上传失败！`);
};
  </script>
  
  <style scoped>
  h1 {
  color: #2c3e50;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin: 5px 0;
}
  </style>