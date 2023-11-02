import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import Dashboard from '../views/User/Dashboard.vue'
import HR from '../views/User/HR.vue'
import OSP from '../views/User/OSP.vue'
import SWDA from '../views/User/SWDA.vue'
import SWDA_AGENCY from '../views/User/SWDA_AGENCIES.vue'

import SLP from '../views/User/SLP.vue'
// insert SLP ref
import SLP_PA from '../views/User/SLP_PA.vue'
import SLP_SNM from '../views/User/SLP_SNM.vue'
import SLP_BMT from '../views/User/SLP_BMT.vue'
import SLP_STAT from '../views/User/SLP_STAT.vue'
import SLP_CBA from '../views/User/SLP_CBA.vue'


import AdminDashboard from '../views/Admin/AdminDashboard.vue'
import AdminHR from '../views/Admin/AdminHR.vue'
import AdminSLP from '../views/Admin/AdminSLP.vue'
import AdminOSP from '../views/Admin/AdminOSP.vue'
import AdminSWDA from '../views/Admin/AdminSWDA.vue'

import AdminSWDACreate from '../views/Admin/CRUD_Pages/AdminSWDACreate'
import AdminSWDAEdit from '../views/Admin/CRUD_Pages/AdminSWDAEdit'

import ERROR from '../views/404.vue' // Import the 404 Error Page
import { userIsAuthenticated } from '../auth'; // Import the user authentication function
import { adminIsAuthenticated } from '../auth'; // Import the admin authentication function
import { startAutoLogout, clearAutoLogout, logout } from '../auth';


const userRequireAuth = (to, from, next) => {
  if (userIsAuthenticated()) {
    // User is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('admin');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // User is not authenticated, redirect to the login page or handle it as needed
    alert('You need to log in to access this page.');
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};


const adminRequireAuth = (to, from, next) => {
  if (adminIsAuthenticated()) {
    // User is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('user');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // User is not authenticated, redirect to the login page or handle it as needed
    alert('You need to log in to access this page.');
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
      if (userIsAuthenticated()) {
        // User is authenticated, clear the token in localStorage
        sessionStorage.removeItem('user');
        // Allow access to the route
        next();
      }
      else if(adminIsAuthenticated()){
          // Admin is authenticated, clear the token in localStorage
          sessionStorage.removeItem('admin');
          // Allow access to the route
          next();
      }
       else {
        // User is not authenticated, proceed to the login page
        logout();
        next();
      }
    }
  },

  // ADMIN DASHBOARD START
  {
    path: '/admindashboard',
    name: 'admindashboard',
    component: AdminDashboard,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr',
    name: 'adminhr',
    component: AdminHR,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminslp',
    name: 'adminslp',
    component: AdminSLP,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminosp',
    name: 'adminosp',
    component: AdminOSP,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminswda',
    name: 'adminswda',
    component: AdminSWDA,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminswda/create',
    name: 'AdminSWDACreate',
    component: AdminSWDACreate,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminswda/:ID/edit',
    name: 'AdminSWDAEdit',
    component: AdminSWDAEdit,
    beforeEnter: adminRequireAuth,
  },
  // ADMIN DASHBOARD END







  //  USER DASHBOARD START
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/hr',
    name: 'hr',
    component: HR,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/osp',
    name: 'osp',
    component: OSP,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda',
    name: 'swda',
    component: SWDA,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda_agency',
    name: 'swda_agency',
    component: SWDA_AGENCY,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/slp',
    name: 'slp',
    component: SLP,
    beforeEnter: userRequireAuth,
  },
  {
    path: '/SLP_PA',
    name: 'slp_pa',
    component: SLP_PA,
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_snm',
    name: 'slp_snm',
    component: SLP_SNM,
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_bmt',
    name: 'slp_bmt',
    component: SLP_BMT,
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_stat',
    name: 'slp_stat',
    component: SLP_STAT,
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_cba',
    name: 'slp_cba',
    component: SLP_CBA,
    beforeEnter: userRequireAuth,
  },

  // USER DASHBOARD END

    //catch-all route for 404 errors
  {
    path: '/:catchAll(.*)', // Matches any URL
    name: 'error',
    component: ERROR
  }
]



const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
