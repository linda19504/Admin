<template>
  <div class="card-container"> 
    <el-row :gutter="20">
      <el-col v-for="card in cards" :key="card.id" :span="6" >
        <el-card title="cards" :shadow="cardShadow">
          <template #header>
            <div class="card-header" @click="toggleCard(card.id)">{{ card.title }}</div>
            <!-- <el-icon :class="['arrow-icon', { 'rotate-180': card.isOpen }]">
              <ArrowDown />
            </el-icon> -->
          </template>
          <transition name="collapse">
            <div v-if="card.isOpen" class="card-content">
              {{ card.content }}
            </div>
          </transition>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { useCardStore } from '@/stores/cardStore.js'
import { storeToRefs } from 'pinia'
// import { ArrowDown } from '@element-plus/icons-vue'

const cardStore = useCardStore()
const { cards } = storeToRefs(cardStore)
onMounted(() => {
  cards.value = cards.value.map((card) => ({
    ...card,
    isOpen: false // 默认折叠
  }))
})
// const { isCardOpen } = storeToRefs(cardStore); // 将状态转换为响应式引用
// const { toggleCards } = cardStore; // 获取 action
// const props = defineProps({
//   title: {
//     type: String,
//     required: true
//   },
//   content: {
//     type: String,
//     default: ''
//   },
//   cardShadow: {
//     type: String,
//     default: 'hover'
//   }
// })
// const cardShadow = ref('hover');
// const isCollapse = computed(()=>!SettingStore.isCollapse);
// const isCollapsed = ref(false);
// const handleCardClick = () => {
//   console.log('卡片被点击:', props.title)
// 可以实现跳转详情页等逻辑
// };
const toggleCard = (cardId) => {
  const card = cards.value.find((card) => card.id === cardId)
  if (card) {
    card.isOpen = !card.isOpen
  }
}
const cardShadow = ref('hover')
</script>
<style scoped>
.card-container {
  display: flex;
  flex-direction: column;
  gap:20px;
}

.keep-card {
  --card-bg: #fff;
  --card-shadow-color: rgba(0, 0, 0, 0.1);
}

.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  font-weight: 500;
  color: #333;
}

.arrow-icon {
  transition: transform 0.3s ease;
}

.rotate-180 {
  transform: rotate(180deg);
}

.card-content {
  line-height: 1.6;
  color: #666;
  margin-top: 12px;
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
}

/* 自定义折叠动画 */
.collapse-enter-active,
.collapse-leave-active {
  transition:
    height 0.3s ease,
    opacity 0.3s ease;
}

.collapse-enter-from,
.collapse-leave-to {
  height: 0;
  opacity: 0;
}

/* 悬停动效 */
.keep-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px var(--card-shadow-color);
  transition: all 0.2s ease;
}
</style>
