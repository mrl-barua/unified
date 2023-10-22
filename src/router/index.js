import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/Dashboard.vue'
import HR from '../views/HR.vue'
import OSP from '../views/OSP.vue'
import SWDA from '../views/SWDA.vue'
import SLP from '../views/SLP.vue'
import ERROR from '../views/404.vue'
import { isAuthenticated } from '../auth'; // Import the authentication function



const requireAuth = (to, from, next) => {
  if (isAuthenticated()) {
    // User is authenticated, allow access to the route
    next();
  } else {
    // User is not authenticated, redirect to the login page or handle it as needed
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};



const routes = [
  {
    path: '/',
    name: 'login',
    component: LoginForm,
    beforeEnter: (to, from, next) => {
      // Check if the user is authenticated
      if (isAuthenticated()) {
        // User is authenticated, clear the token in localStorage
        localStorage.removeItem('user');
        // Allow access to the route
        next();
      } else {
        // User is not authenticated, proceed to the login page
        next();
      }
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: requireAuth,
  },

  {
    path: '/HR',
    name: 'hr',
    component: HR,
    beforeEnter: requireAuth,
  },

  {
    path: '/OSP',
    name: 'osp',
    component: OSP,
    beforeEnter: requireAuth,
  },

  {
    path: '/SWDA',
    name: 'swda',
    component: SWDA,
    beforeEnter: requireAuth,
  },

  {
    path: '/SLP',
    name: 'slp',
    component: SLP,
    beforeEnter: requireAuth,
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
