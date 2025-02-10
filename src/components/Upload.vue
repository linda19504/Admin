<template>
  <el-upload
    action=""
    :before-upload="beforeUploadAction"
    :list-type="listType"
    :multiple="multiple"
    :on-preview="handlePictureCardPreview"
    :on-remove="hanldeRemove"
    :file-list="fileList"
  >
    <el-icon><Plus /></el-icon>
  </el-upload>
  <el-dialog v-modal="dialogVisible" width="50%" top="80px">
    <img w-full :src="dialogImageUrl" alt="预览图片" style="width: 100%" />
  </el-dialog>
</template>

<script setup>
 import { ref } from 'vue'
 import { Plus } from '@element-plus/icons-vue'
 import { ElMessage } from 'element-plus'
const fileList = ref([])
const emit = defineEmits(['update']);
const props = defineProps({
  modelValue:Array,
  Multple:{
    type:Boolean,
    default:true,
  },
  listType:{
    type:Boolean,
    default:'picture-card',
  },
  showFileList:{
    type:Boolean,
    default:true,
  },
  })
  const dialogVisible = ref(false);
  const dialogImageUrl = ref('');
  const beforeUploadAction = (file, fileList) => {
    return new Promise((resolve, reject) => {
      var reader = new FileReader()//读取文件内容
      let reg = /\.jpg$|\.jpeg$|\.gif$|\.png$/i
      reader.readAsDataURL(file)//将文件读取为data URL
      let name = file.name
      if (reg.test(name)) {//执行读取完的回调，检查文件名是否匹配正则表达式
        reader.onload = () => {//reader.onload 是 FileReader 的事件回调，当文件读取成功时触发
          fileList.value.push({
            name: name,
            url: e.target.result,
          })
          emit('update', fileList.value)//fileList.value为参数
          resolve(e.target.result)
        }
      } else {
        ElMessage.error('请上传图片')
        reject()
      }
    })
  }
</script>

<style></style>
