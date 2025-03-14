<template>
  <el-timeline style="max-width: 600px">
    <el-timeline-item
      v-for="(activity, index) in timelineActivities"
      :key="index"
      :timestamp="activity.timestamp"
      :color="activity.color"
      :hollow="activity.hollow"
      placement="top"
    >
      <el-card>
        <el-space>
          <TheAvatar
            :avatar_url="activity.avatar_url"
            :size="size"
            :username="activity.username"
            :email="activity.email"
          />
        </el-space>
      </el-card>
    </el-timeline-item>
  </el-timeline>
</template>

<script setup>
import { computed } from "vue";
import TheAvatar from "./TheAvatar.vue";

const props = defineProps({
  activities: {
    type: Array,
    required: true
  },
  size: {
    type: String,
    default: "default",
  },
});

const timelineActivities = computed(() =>
  props.activities.map(activity => ({
    ...activity,
    color: "#409EFF",
    hollow: true,
  }))
);
</script>
