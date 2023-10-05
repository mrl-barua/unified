import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/Dashboard.vue'
import HR from '../views/HR.vue'
import OSP from '../views/OSP.vue'
import SWDA from '../views/SWDA.vue'
import ERROR from '../views/404.vue'
import { isAuthenticated } from '../auth'; // Import the authentication function

const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page or handle it as needed
        next('/');
      }
    },
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
