import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueTelegram from 'vue-tg'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueTelegram)

app.mount('#app')
