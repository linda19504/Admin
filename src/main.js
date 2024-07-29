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
app.use(createPinia())
app.use(ElementPlus)
app.use(router)
app.use(i18n)
app.mount('#app')
