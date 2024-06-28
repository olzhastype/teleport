import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import PrimeVue from 'primevue/config'
import Button from 'primevue/button'

import Aura from '@primevue/themes/aura'
import DataTable from 'primevue/datatable'
import Column from 'primevue/column'

import 'primeflex/primeflex.css'
import Toolbar from 'primevue/toolbar'
import Avatar from 'primevue/avatar'
import Tag from 'primevue/tag'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
  theme: {
    preset: Aura
  }
})

app.mount('#app')

app.component('Button', Button)
app.component('DataTable', DataTable)
app.component('Column', Column)
app.component('Toolbar', Toolbar)
app.component('Avatar', Avatar)
app.component('DataView', DataView)
app.component('Tag', Tag)
