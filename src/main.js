import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/styles/style.scss'
// import 'element-plus/lib/theme-chalk/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(ElementPlus)
app.use(router)

app.mount('#app')
