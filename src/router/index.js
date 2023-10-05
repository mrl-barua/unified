import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/Dashboard.vue'

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
