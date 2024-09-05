<template>
  <div class="loginPage">
    <div class="common-layout">
      <div class="ContainerImage">
      <img src="../assets/bg.png" class="BackgroundImage"/>
    </div>
      <el-container>
        <el-header>
          <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            :ellipsis="false"
            @select="handleSelect"
          >
            <el-menu-item index="0">
              <el-icon>
                <ChromeFilled />
              </el-icon>
            </el-menu-item>
            <span class="title_name">{{ HOME_MAIN.TITLE }}</span>
          </el-menu>
        </el-header>
        <el-container>
          <el-aside width="400px">
            <img src="../assets/icon.png" alt="" class="IconImage"/>
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
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  gap: 5vw;
  width: 100vw;
  height: 100vh;
  max-width: 100%;
  background: #f8f9fb;
  padding: 0 10vw;
}
.title_icon {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  width: auto;
}
.phoneImage {
  max-width: 400px;
  position: relative;
  top: 36px;
  justify-self: end;
}

.loginForm {
  justify-self: start;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.06);
  border-radius: 32px;
  background: white;
  padding: 74px 60px;

  display: grid;
  place-items: center;
  row-gap: 52px;
  width: 380px;
  margin-left:350px;
}

.loginForm > form {
  display: grid;
  row-gap: 24px;
  width: 100%;
  height: 100%;
}

img{
  position:relative;
  height: auto; 
  padding-bottom: 74px;
  padding-left:auto;
}
.ContainerImage{
  width: 100%;
  height: 300px; 
  /* background-image: url('your-image.jpg'); */
  background-size: 100% auto; 
  background-repeat: no-repeat; 
  background-position: center;
}
.BackgroundImage{
  width:100%;
  height:300px;
  opacity: 0.5;
  background-image: url('../assets/bg.png');
  background-size: cover; 
  background-position: center; 
  margin: 0; 
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  text-align: center;
  margin-bottom:45px;
  /* height: 28rem;
    width: 20rem;
    box-sizing: border-box;
    padding: 1.5rem;
    border-top-right-radius: 3rem;
    background-color: #fff;
    display: flex;
    flex-direction: column; */
}
input {
  background: #fafafa;
  border-radius: 4px;
  border: none;
  padding:5px;
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
  color: #a1a1a1;
  display: flex;
  align-items: center;
  gap: 6px;
}
.el-menu--horizontal > .el-menu-item:nth-child(1) {
  margin-right: auto;
}
.el-container{
  position:absolute;
}
</style>
