import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/Dashboard.vue'
import HR from '../views/HR.vue'
import OSP from '../views/OSP.vue'
import SWDA from '../views/SWDA.vue'
import ERROR from '../views/404.vue'

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

  {
    path: '/HR',
    name: 'hr',
    component: HR
  },

  {
    path: '/OSP',
    name: 'osp',
    component: OSP
  },

  {
    path: '/SWDA',
    name: 'swda',
    component: SWDA
  },

    //catch-all route for 404 errors
  {
    path: '/:catchAll(.*)', // Matches any URL
    name: 'error',
    component: ERROR
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
