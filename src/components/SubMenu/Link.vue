<template>
  <component :is="type" v-bind="linkProps(to)">
    <slot />
  </component>
</template>

<script setup>
import { computed } from 'vue'
import { isExternal as checkExternal } from '@/utils/validate.js'

const props = defineProps({
  to: {
    type: String,
    required: true,
  },
})

const isExternal = computed(() => checkExternal(props.to))

const type = computed(() => isExternal.value ? 'a' : 'router-link')

const linkProps = (to) => {
  if (isExternal.value) {
    return {
      href: to,
      target: '_blank',
      rel: 'noopener',
    }
  }
  return {
    to: to,
  }
}
</script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
</style>
