<template>
  <div class="flex-row flex-align-item-start flex-gap-1rem">
    <span class="blod color-deepgray">{{ label }}</span>
    <div class="flex-col color-deepgray">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { defineProps } from 'vue';
const props = defineProps({
    label: {
      type: String,
      default: " "
    }
  });
</script>
<style scope>
  .flex-row {
    display: flex;
    flex-direction: row;
  }
  .flex-align-item-start {
    align-items: flex-start;
  }
  .flex-gap-1rem {
    gap: 1rem;
  }
  .blod {
    font-weight: blod;
  }
  .color-deepgray {
    color: rgb(92, 92, 92);
  }
  .flex-col {
    display: flex;
    flex-direction: column;
  }
</style>
