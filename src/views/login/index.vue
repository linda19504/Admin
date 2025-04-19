<template>
  <div class="login-container">
    <div class="login-box">
      <SwitchDark class="login-dark" />
      <div class="login-left">
        <img src="@/assets/image/login/icon.png" />
      </div>
      <div class="login-form">
        <!-- <div class="info-qrcode">{{ accountLogin ? '扫码登录' : '账号登录' }}</div>
        <img src="@/assets/image/login/qrcode-icon.png" class="qrcode" @click="handleClick" /> -->
        <LoginForm />
        <!-- <LoginQrcode v-else /> -->
      </div>
    </div>
  </div>
</template>

<script setup>
  import { ref } from 'vue'
  import LoginForm from './components/LoginForm.vue'

  // const accountLogin = ref(true)

  // const handleClick = () => {
  //   console.log('=======', accountLogin)
  //   accountLogin.value = !accountLogin.value
  // }
</script>
<style lang="scss" scoped>
  @import './index';
</style>
