<template>
  <div class="el_description_name">
    <el-row gutter="1rem" class="p-half-rem">
      <el-col :span="12">
        <TheProfile label="创建者">
          <TheAvatar
            :avatar_url="creater.avatar_url"
            :username="creater.username"
            :email="creater.email"
          ></TheAvatar>
        </TheProfile>
      </el-col>
      <el-col :span="12">
        <TheProfile label="审批者">
          <TheAvatar
            :avatar_url="approvers.avatar_url"
            :username="approvers.username"
            :email="approvers.email"
          ></TheAvatar>
        </TheProfile>
      </el-col>
    </el-row>

    <el-row gutter="1rem" class="p-half-rem">
      <el-col :span="12">
        <TheProfile label="创建时间"> {{ create_date }} </TheProfile>
      </el-col>
      <el-col :span="12">
        <TheProfile label="最后更新时间">{{ last_updated_date }}</TheProfile>
      </el-col>
    </el-row>
  </div>

  <el-descriptions class="margin-top" :column="3" :size="size" border>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <user />
          </el-icon>
          Username
        </div>
      </template>
      <div>const</div>
      kooriookami
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <iphone />
          </el-icon>
          Telephone
        </div>
      </template>
      18100000000
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <location />
          </el-icon>
          Place
        </div>
      </template>
      Suzhou
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <tickets />
          </el-icon>
          Remarks
        </div>
      </template>
      <el-tag size="small">School</el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">
          <el-icon :style="iconStyle">
            <office-building />
          </el-icon>
          Address
        </div>
      </template>
      No.1188, Wuzhong Avenue, Wuzhong District, Suzhou, Jiangsu Province
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import { computed, ref } from 'vue'
import { Iphone, Location, OfficeBuilding, Tickets, User } from '@element-plus/icons-vue'
import TheProfile from './TheProfile.vue'
import TheAvatar from './TheAvatar.vue'
defineProps({
  creater: {
    default: {
      avatar_url: '',
      username: '',
      email: ''
    }
  },
  approvers: {
    default: [
      {
        avatar_url: '',
        username: '',
        email: ''
      },
      {
        avatar_url: '',
        username: '',
        email: ''
      }
    ]
  },
  create_date: { default: '' },
  last_updated_date: { default: '' }
})
const size = ref('default')
const iconStyle = computed(() => {
  const marginMap = {
    large: '8px',
    default: '6px',
    small: '4px'
  }
  return {
    marginRight: marginMap[size.value] || marginMap.default
  }
})
const blockMargin = computed(() => {
  const marginMap = {
    large: '32px',
    default: '28px',
    small: '24px'
  }
  return {
    marginTop: marginMap[size.value] || marginMap.default
  }
})
</script>

<style scoped>
.p-half-rem {
  padding: 0.5rem;
}
.grid-content {
  display: flex;
  flex-direction: row;
}

.el-descriptions {
  margin-top: 20px;
}

.cell-item {
  display: flex;
  align-items: center;
}

.margin-top {
  margin-top: 20px;
}

.el-row:last-child {
  margin-bottom: 0;
}
.el-col {
  border-radius: 4px;
}

.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
</style>
