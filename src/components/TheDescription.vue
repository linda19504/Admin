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
          >
          </TheAvatar>
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
          Setting_ID
        </div>
      </template>
      <div>HOST_NAME</div>
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">名称</div>
      </template>
      主机名
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">数据类型</div>
      </template>
      Short String
    </el-descriptions-item>
    <el-descriptions-item>
      <template #label>
        <div class="cell-item">描述</div>
      </template>
      主机名
    </el-descriptions-item>
    <el-descriptions-item :span="4">
      <template #label>
        <div class="cell-item">初始值</div>
      </template>
      Pantum Printer
    </el-descriptions-item>
    <el-descriptions-item :span="4">
      <template #label>
        <div class="cell-item">校验规则</div>
      </template>
      [A-Z][A-Z_0-9]*
    </el-descriptions-item>
  </el-descriptions>
  <br />
  <TimelineList
    :timestamps="[dynamicTimestamp1, dynamicTimestamp2, dynamicTimestamp3]"
    :avatars="[avatar_url, avatar_url_one, avatar_url_two]"
    :usernames="[props.username, props.username_one, props.username_two]"
    :emails="[props.email, props.email_one, props.email_two]"
    :size="size"
  />
</template>

<script setup>
import { computed, ref } from "vue";
import { User } from "@element-plus/icons-vue";
import TheProfile from "./TheProfile.vue";
import TheAvatar from "./TheAvatar.vue";
import TimelineList from "./TimelineList.vue";

const avatar_url = ref("/avatar_one.png");
const avatar_url_one = ref("/avatar_two.jpg");
const avatar_url_two = ref("/avatar_three.jpg");

const props = defineProps({
  username: { default: "玉置浩二" },
  username_one: { default: "山口百惠" },
  username_two: { default: "小野丽莎" },
  email: { default: "(tamaki_hoji@email.com)" },
  email_one: { default: "(Yamaguchi Yuuko@email.com)" },
  email_two: { default: "(Ono Risa@email.com)" },
  size: { default: "" },
  icon: { default: "" },
  create_date: { default: "2023年10月7日" },
  last_updated_date: { default: "2024年1月7日" },
});

const size = ref("default");
const dynamicTimestamp1 = ref("2023-01-01");
const dynamicTimestamp2 = ref("2023-02-01");
const dynamicTimestamp3 = ref("2023-03-01");

const creater = ref({
  avatar_url: "avatar_one.png",
  username: "慕容紫英",
  email: "murong_ziying@gmail.coms",
});
const approvers = ref({
  avatar_url: "avatar_two.jpg",
  username: "玉置浩二",
  email: "yuzhi_hasoer@gmail.coms",
});

const iconStyle = computed(() => {
  const marginMap = {
    large: "8px",
    default: "6px",
    small: "4px",
  };
  return {
    marginRight: marginMap[size.value] || marginMap.default,
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
