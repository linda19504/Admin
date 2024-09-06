<template>
  <div class="loginPage">
    <div class="common-layout">
      <el-container>
        <el-header>
          <div class="title" >
            <el-icon>
              <ChromeFilled />
            </el-icon>
            <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
          </div>
        </el-header>
        <el-container>
          <el-aside width="400px">
            <img class="IconImage" src="../assets/icon.png"  />
          </el-aside>
          <el-main>
            <div class="loginForm">
              <form @submit.prevent>
                <input type="email" placeholder="邮箱" v-model="email" />
                <input v-if="!isLogin" type="text" placeholder="用户名" v-model="username" />
                <input type="password" placeholder="密码" v-model="password" />
                <button type="submit" class="loginButton" @click="isLogin ? login() : register()">
                  {{ isLogin ? '登录' : '注册' }}
                </button>
                <p @click="isLogin = !isLogin" class="info">
                  {{ isLogin ? '还没有账号？点击注册' : '已有账号？点击登录' }}
                </p>
                <div v-if="!isLogin" class="agreement">
                  <input type="checkbox" v-model="agreementChecked" />勾选表示同意隐私协议和使用规范
                </div>
              </form>
            </div>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>
<script setup>
import { ref } from 'vue'
import { useUserStore } from '@/stores/user.js'
import { ChromeFilled } from '@element-plus/icons-vue'
import { HOME_MAIN } from '@/constants/MainPage.constants.js'

const isLogin = ref(true)
const email = ref('')
const username = ref('')
const password = ref('')
const agreementChecked = ref(false)
const userStore = useUserStore()
const activeIndex = ref('1')

async function register() {
  if (!agreementChecked.value) {
    alert('请先阅读并同意隐私协议和使用规范')
    return
  }
  await userStore.register(email.value, username.value, password.value)
  // router.replace("/");
}

async function login() {
  await userStore.login(email.value, password.value)
  // router.replace("/");
}  

</script>
<style scoped>
.loginPage {
  margin:0;
  padding:0;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  background: #f8f9fb;
  height: 600px;
  opacity: 1;
  background-image: url('../assets/bg.png');
  background-size: cover;
  background-position: center;
  background-position: center bottom;
}
.IconImage {
  display: flex;
  justify-content: space-between; 
  align-items: center;
  background-size: cover; 
  background-attachment: fixed;
  background-position: center;
  height: 450px; 
  width:auto;
  background-position: center center;
}
.title{
  color: #016fad;
  font-size:x-large;
}
.loginForm {
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 65px 60px;
  display: flex;
  justify-self: start;
  place-items: center;
  row-gap: 52px;
  width: 380px;
  margin-left: 350px;
}
.loginForm > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}
input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
  padding: 10px;
}
input::placeholder {
  color: #9e9e9e;
}
.loginButton {
  background: linear-gradient(89.93deg, #00c2ff 0.06%, #0047ff 105.68%);
  padding: 12px 0;
  color: white;
  border: none;
}
.info {
  color: #1da0ff;
  text-align: center;
  cursor: pointer;
}
.agreement {
  display: flex;
  color: #a1a1a1;
  align-items: center;
  gap: 6px;
}
</style>
