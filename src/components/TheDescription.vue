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
    <el-descriptions-item v-for="item in descriptionItems" :key="item.label" :span="item.span">
      <template #label>
        <div class="cell-item">
          <el-icon v-if="item.icon" :style="iconStyle">
            <component :is="item.icon" />
          </el-icon>
          {{ item.label }}
        </div>
      </template>
      {{ item.value }}
    </el-descriptions-item>
  </el-descriptions>
</template>

<script setup>
import { computed } from "vue";
import TheProfile from "./TheProfile.vue";
import TheAvatar from "./TheAvatar.vue";

const props = defineProps({
  size: { type: String, default: "default" },
  create_date: { type: String, required: true },
  last_updated_date: { type: String, required: true },
  creater: { type: Object, required: true },
  approvers: { type: Object, required: true },
  descriptionItems: { type: Array, required: true }
});

const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[props.size] || marginMap.default,
  };
});
</script>

<style scoped>
.break-line {
  white-space: pre-wrap;
}

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
