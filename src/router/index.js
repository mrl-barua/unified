import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/User/Dashboard.vue'
import HR from '../views/User/HR.vue'
import OSP from '../views/User/OSP.vue'
import SWDA from '../views/User/SWDA.vue'
import SLP from '../views/User/SLP.vue'
import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import AdminHR from '../views/Admin/AdminHR.vue'
import AdminSLP from '../views/Admin/AdminSLP.vue'
import AdminOSP from '../views/Admin/AdminOSP.vue'
import AdminSWDA from '../views/Admin/AdminSWDA.vue'
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

  // ADMIN DASHBOARD START
  {
    path: '/admindashboard',
    name: 'admindashboard',
    component: AdminDashboard,
    beforeEnter: requireAuth,
  },

  {
    path: '/adminhr',
    name: 'adminhr',
    component: AdminHR,
    beforeEnter: requireAuth,
  },

  {
    path: '/adminslp',
    name: 'adminslp',
    component: AdminSLP,
    beforeEnter: requireAuth,
  },

  {
    path: '/adminosp',
    name: 'adminosp',
    component: AdminOSP,
    beforeEnter: requireAuth,
  },

  {
    path: '/adminswda',
    name: 'adminswda',
    component: AdminSWDA,
    beforeEnter: requireAuth,
  },
  // ADMIN DASHBOARD END


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
