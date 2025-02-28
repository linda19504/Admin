<template>
    <div class="m-tool-left">
      <CollapseIcon />
      <Hamburger />
    </div>
  </template>
  
  <script setup>
    import CollapseIcon from '@/Header/components/Collapselcon.vue'
                                
    import Hamburger from '@/Header/components/Hamburger.vue'
  </script>
  
  <style lang="scss" scoped>
    .m-tool-left {
      display: flex;
      align-items: center;
      height: 100%;
    }
  </style>
  