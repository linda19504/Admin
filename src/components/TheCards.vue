<template>
  <div class="card-container">
    <el-row :gutter="20">
      <el-col v-for="card in cards" :key="card.id" :span="6" @click="openDialog(card)">
        <el-card class="keep-card" shadow="hover">
          <div class="card-header">
            <h3>{{ card.title }}</h3>
          </div>
          <div class="card-content">
            <p>{{ card.content }}</p>
          </div>
        </el-card>
      </el-col>
    </el-row> 
    <el-dialog
      v-model="dialogVisible"
      :title="selectedCard.title"
      width="30%"
      :before-close="handleClose"
    >
      <div class="dialog-content">
        <p>{{ selectedCard.content }}</p>
      </div>
      <template #footer>
        <el-button @click="dialogVisible = false">关闭</el-button>
        <el-button type="primary" @click="saveCard">保存</el-button>
      </template>
    </el-dialog>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { ElMessageBox, ElMessage } from 'element-plus'
import { useCardStore } from '@/stores/cardStore.js'
import { storeToRefs } from 'pinia'

const cardStore = useCardStore()
const { cards } = storeToRefs(cardStore)

const dialogVisible = ref(false) // 控制弹窗显示
const selectedCard = ref({}) // 当前选中的卡片
const openDialog = (card) => {
  selectedCard.value = { ...card }
  dialogVisible.value = true
}
const saveCard = () => {
  ElMessage.success('保存成功')
  dialogVisible.value = false // 关闭弹窗
}
const handleClose = (done) => {
  ElMessageBox.confirm('确定关闭吗？', '提示', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  })
    .then(() => {
      done()
    })
    .catch(() => {})
}
</script>
<style scoped>
.keep-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.keep-card {
  cursor: pointer;
  transition: transform 0.2s;
}

.keep-card:hover {
  transform: translateY(-5px);
}

.card-header h3 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
}

.card-content p {
  margin: 10px 0 0;
  color: #666;
}

.dialog-content p {
  margin: 0;
  font-size: 16px;
  color: #333;
}
</style>
