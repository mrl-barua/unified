import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/Dashboard.vue'
import HR from '../views/HR.vue'
import OSP from '../views/OSP.vue'
import SWDA from '../views/SWDA.vue'
import SLP from '../views/SLP.vue'
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
        next({
          name: 'login',
          query: { redirect: to.fullPath }, // Pass the intended destination as a query parameter
        });
      }
    },
  },

  {
    path: '/HR',
    name: 'hr',
    component: HR,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page or handle it as needed
        next({
          name: 'login',
          query: { redirect: to.fullPath }, // Pass the intended destination as a query parameter
        });
      }
    },
  },

  {
    path: '/OSP',
    name: 'osp',
    component: OSP,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page or handle it as needed
        next({
          name: 'login',
          query: { redirect: to.fullPath }, // Pass the intended destination as a query parameter
        });
      }
    },
  },

  {
    path: '/SWDA',
    name: 'swda',
    component: SWDA,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page or handle it as needed
        next({
          name: 'login',
          query: { redirect: to.fullPath }, // Pass the intended destination as a query parameter
        });
      }
    },
  },

  {
    path: '/SLP',
    name: 'slp',
    component: SLP,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, allow access to the route
        next();
      } else {
        // User is not authenticated, redirect to the login page or handle it as needed
        next({
          name: 'login',
          query: { redirect: to.fullPath }, // Pass the intended destination as a query parameter
        });
      }
    },
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
