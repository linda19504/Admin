import { createApp } from 'vue'

import App from './App.vue'

import { setup } from '@/setup'

const app = createApp(App)

setup(app)

app.mount('#app')

