import './assets/main.css'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/style.scss'
import App from './App.vue'
import router from './router'
import {createI18n} from 'vue-i18n'
import en from'./language/en'
import zh from'./language/zh'
import '@/assets/iconfont/iconfont.css'
import '@/assets/iconfont/iconfont.js'
import * as ElIconsModules from '@element-plus/icons-vue'//注册icon组件
import PageWrapLayout from '@/components/PageWrapLayout/index.vue'//引入全局组件布局
const messages = {
    en,
    zh
}
const app = createApp(App)
const i18n = createI18n({
    legacy:false,
    messages,
    locale:'en'
})
// 全局注册element-plus icon图标组件
export const registerElIcons = (app) =>{
  Object.keys(ElIconsModules).forEach((key) => {
    if ('Menu' !== key) {
      app.component(key, ElIconsModules[key])
    } else { 
      app.component(key + 'Icon', ElIconsModules[key])
    }
  })
}
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')
app.component('PageWrapLayout', PageWrapLayout)
