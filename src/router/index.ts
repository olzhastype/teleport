import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AuthView from '../views/AuthView.vue'
import QrView from '@/views/QrView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: '/auth',
          name: 'auth',
          component: AuthView
        },
        {
          path: '/qr',
          name: 'qr',
          component: QrView
        }
      ]
    }
  ]
})

export default router
