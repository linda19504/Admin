<template>
  <el-timeline style="max-width: 600px">
    <el-timeline-item
      v-for="(activity, index) in activities"
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
  timestamps: {
    type: Array,
    required: true,
  },
  avatars: {
    type: Array,
    required: true,
  },
  usernames: {
    type: Array,
    required: true,
  },
  emails: {
    type: Array,
    required: true,
  },
  size: {
    type: String,
    default: "default",
  },
});

const activities = computed(() =>
  props.timestamps.map((timestamp, index) => ({
    timestamp,
    color: "#409EFF",
    hollow: true,
    avatar_url: props.avatars[index],
    username: props.usernames[index],
    email: props.emails[index],
  }))
);
</script>
