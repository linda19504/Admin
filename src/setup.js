import 'element-plus/dist/index.css'
import '@/assets/main.css'
import '@/styles/style.scss'

import { createPinia } from 'pinia'
import ElementPlus from 'element-plus'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import router from '@/router'
import { createI18n } from 'vue-i18n'

import en from'./language/en'
import zh from'./language/zh'

const messages = {
    en,
    zh
}

const i18n = createI18n({
    legacy:false,
    messages,
    locale:'en'
})

const pinia = createPinia()

export const setup = (app) => {
  app.use(pinia)
  app.use(router)
  app.use(ElementPlus)
  app.use(i18n)

  for (const [key, component] of Object.entries(ElementPlusIconsVue)) {
    app.component(`ElIcon${key}`, component)
  }
}
