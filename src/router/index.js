import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import SettingDashboard from '../views/Admin/Settings_Pages/SettingDashboard'
import AddSettingUsers from '../views/Admin/Settings_Pages/addUserAccess'
import EditSettingUsers from '../views/Admin/Settings_Pages/editUserAccess'
import ChangeBackground from '../views/Admin/Settings_Pages/changeBackground'

import cbss from '../views/User/CBSS/CBSS.vue'
import hr from '../views/User/HR/HR.vue'
import osp from '../views/User/OSP/OSP.vue'
import swda from '../views/User/SWDA/SWDA.vue'

import ERROR from '../views/404.vue' // Import the 404 Error Page
import { userIsAuthenticated } from '../auth'; // Import the user authentication function
import { adminIsAuthenticated } from '../auth'; // Import the admin authentication function
import { swdaAdminIsAuthenticated } from '../auth';
import { cbssAdminIsAuthenticated } from '../auth';
import { hrAdminIsAuthenticated } from '../auth';
import { osdAdminIsAuthenticated } from '../auth';
import { startAutoLogout, clearAutoLogout, logout } from '../auth';
import Swal from 'sweetalert2'


const userRequireAuth = (to, from, next) => {
  if (userIsAuthenticated()) {
    // User is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('admin');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // User is not authenticated, redirect to the login page or handle it as needed
    // alert('You need to log in to access this page.');
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
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
    // alert('You need to log in to access this page.');
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};


const swdaAdminRequireAuth = (to, from, next) => {
  if (adminIsAuthenticated() || swdaAdminIsAuthenticated()) {
    // Either admin or swdaAdmin is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('user');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // Neither is authenticated, redirect to the login page or handle it as needed
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};

const cbssAdminRequireAuth = (to, from, next) => {
  if (adminIsAuthenticated() || cbssAdminIsAuthenticated()) {
    // Either admin or swdaAdmin is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('user');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // Neither is authenticated, redirect to the login page or handle it as needed
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};


const hrAdminRequireAuth = (to, from, next) => {
  if (adminIsAuthenticated() || hrAdminIsAuthenticated()) {
    // Either admin or swdaAdmin is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('user');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // Neither is authenticated, redirect to the login page or handle it as needed
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
    next({
      name: 'login',
      query: { redirect: to.fullPath },
    });
  }
};


const osdAdminRequireAuth = (to, from, next) => {
  if (adminIsAuthenticated() || osdAdminIsAuthenticated()) {
    // Either admin or swdaAdmin is authenticated, allow access to the route
    next();
    sessionStorage.removeItem('user');
    clearAutoLogout();
    startAutoLogout();
  } else {
    // Neither is authenticated, redirect to the login page or handle it as needed
    Swal.fire({
      icon: 'warning',
      title: 'Warning',
      text: 'You need to log in to access this page.',
      width: 450,
      padding: '3.5em',
    });
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
      else if (adminIsAuthenticated()) {
        // Admin is authenticated, clear the token in localStorage
        sessionStorage.removeItem('admin');
        // Allow access to the route
        next();
      }
      else if (swdaAdminIsAuthenticated()) {
        // Admin is authenticated, clear the token in localStorage
        sessionStorage.removeItem('swdaAdmin');
        // Allow access to the route
        next();
      }
      else if (cbssAdminIsAuthenticated()) {
        // Admin is authenticated, clear the token in localStorage
        sessionStorage.removeItem('cbssAdmin');
        // Allow access to the route
        next();
      }
      else if (hrAdminIsAuthenticated()) {
        // Admin is authenticated, clear the token in localStorage
        sessionStorage.removeItem('hrAdmin');
        // Allow access to the route
        next();
      }
      else if (osdAdminIsAuthenticated()) {
        // Admin is authenticated, clear the token in localStorage
        sessionStorage.removeItem('osdAdmin');
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

  // TODO ADMIN DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO ADMIN DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO ADMIN DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // ! ADMIN CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    path: '/admincbss',
    name: 'adminCBSS',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/archive',
    name: 'adminCBSSArchive',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_Archive.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/create',
    name: 'AdminCBSSCreate',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSCreate.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/:ID/edit',
    name: 'AdminCBSSEdit',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSEdit.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/:ID/view',
    name: 'AdminCBSSView',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSView.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/:ID/editHistory',
    name: 'editCbssHistory',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_EditHistory.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  {
    path: '/admincbss/:ID/editHistory/view',
    name: 'editCbssHistoryView',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_EditHistory_View.vue'),
    beforeEnter: cbssAdminRequireAuth,
  },
  // ! ADMIN CBSS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN CBSS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN CBSS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //? TODO ADMIN HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? TODO ADMIN HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? TODO ADMIN HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    path: '/adminhr',
    name: 'adminhr',
    component: () => import('../views/Admin/AdminHR/AdminHR.vue'),
    beforeEnter: hrAdminRequireAuth,
  },
  {
    path: '/adminhr/archive',
    name: 'adminHRArchive',
    component: () => import('../views/Admin/AdminHR/AdminHR_Archive.vue'),
    beforeEnter: hrAdminRequireAuth,
  },
  {
    path: '/adminhr/create',
    name: 'AdminHRCreate',
    component: () => import('../views/Admin/AdminHR/AdminHRCreate.vue'),
    beforeEnter: hrAdminRequireAuth,
  },
  {
    path: '/adminhr/:ID/edit',
    name: 'AdminHREdit',
    component: () => import('../views/Admin/AdminHR/AdminHREdit.vue'),
    beforeEnter: hrAdminRequireAuth,
  },
  {
    path: '/adminhr/:ID/view',
    name: 'AdminHRView',
    component: () => import('../views/Admin/AdminHR/AdminHRView.vue'),
    beforeEnter: hrAdminRequireAuth,
  },

  {
    path: '/adminhr/:ID/editHistory',
    name: 'AdminHReditHistory',
    component: () => import('../views/Admin/AdminHR/AdminHR_EditHistory.vue'),
    beforeEnter: hrAdminRequireAuth,
  },
  {
    path: '/adminhr/:ID/editHistory/view',
    name: 'AdminHReditHistoryView',
    component: () => import('../views/Admin/AdminHR/AdminHR_EditHistory_View.vue'),
    beforeEnter: hrAdminRequireAuth,
  },

  //? TODO ADMIN HR END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? TODO ADMIN HR END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //? TODO ADMIN HR END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // * ADMIN SLP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SLP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SLP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    path: '/adminslp',
    name: 'adminslp',
    component: () => import('../views/Admin/AdminSLP/AdminSLP.vue'),
    beforeEnter: adminRequireAuth,
  },

  // * ADMIN SLP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SLP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SLP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // ! ADMIN OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    path: '/adminosp',
    name: 'adminosp',
    component: () => import('../views/Admin/AdminOSP/AdminOSP.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  {
    path: '/adminosp/archive',
    name: 'adminhrArchive',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_Archive.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  {
    path: '/adminosp/create',
    name: 'AdminOSPCreate',
    component: () => import('../views/Admin/AdminOSP/AdminOSPCreate.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  {
    path: '/adminosp/:ID/edit',
    name: 'AdminOSPEdit',
    component: () => import('../views/Admin/AdminOSP/AdminOSPEdit.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  {
    path: '/adminosp/:ID/view',
    name: 'AdminOSPView',
    component: () => import('../views/Admin/AdminOSP/AdminOSPView.vue'),
    beforeEnter: osdAdminRequireAuth,
  },


  {
    path: '/adminosp/:ID/editHistory',
    name: 'AdminOSPeditHistory',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_EditHistory.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  {
    path: '/adminosp/:ID/editHistory/view',
    name: 'AdminOSPeditHistoryView',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_EditHistory_View.vue'),
    beforeEnter: osdAdminRequireAuth,
  },
  // ! ADMIN OSP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN OSP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ! ADMIN OSP END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // ? ADMIN SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ? ADMIN SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ? ADMIN SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  {
    path: '/adminswda',
    name: 'adminswda',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/archive',
    name: 'adminswdaArchive',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_Archive.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/create',
    name: 'AdminSWDACreate',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDACreate.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/:ID/editHistory',
    name: 'editHistory',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_EditHistory.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/:ID/editHistory/view',
    name: 'editHistoryView',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_EditHistory_View.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/:ID/view',
    name: 'AdminSWDAView',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDAView.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },
  {
    path: '/adminswda/:ID/edit',
    name: 'AdminSWDAEdit',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDAEdit.vue'),
    beforeEnter: swdaAdminRequireAuth,
  },



  // ? ADMIN SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ? ADMIN SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ? ADMIN SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  // * ADMIN SETTINGS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SETTINGS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SETTINGS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  {
    path: '/adminSettings',
    name: 'SettingDashboard',
    component: SettingDashboard,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminSettings/addUserAccess',
    name: 'AddUserAccess',
    component: AddSettingUsers,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminSettings/:ID/editUserAccess',
    name: 'EditUserAccess',
    component: EditSettingUsers,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminSettings/ChangeBackground',
    name: 'ChangeBackground',
    component: ChangeBackground,
    beforeEnter: adminRequireAuth,
  },

  // * ADMIN SETTINGS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SETTINGS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // * ADMIN SETTINGS END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  // TODO ADMIN DASHBOARD END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO ADMIN DASHBOARD END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO ADMIN DASHBOARD END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  ////////////////////////////////////////////////////////////////////////////////////
  // TODO USER DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO USER DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // TODO USER DASHBOARD START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  {
    path: '/cbss',
    name: 'cbss',
    component: cbss,
    beforeEnter: userRequireAuth,
  },

  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER CBSS START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  //////////////////////////////////////////////////////////////////////////
  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  {
    path: '/hr',
    name: 'hr',
    component: hr,
    beforeEnter: userRequireAuth,
  },

  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // ?USER HR START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  {
    path: '/osp',
    name: 'osp',
    component: osp,
    beforeEnter: userRequireAuth,
  },
  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // *USER OSP START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  // !USER SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER SWDA START!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  {
    path: '/swda',
    name: 'swda',
    component: swda,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda_agency',
    name: 'swda_agency',
    component: () => import('../views/User/SWDA/SWDA_AGENCIES.vue'),
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/:ID/view',
    name: 'SWDAView',
    component: () => import('../views/User/SWDA/SWDA_VIEW.vue'),
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/activeAccredited',
    name: 'swda_active_accredited',
    component: () => import('../views/User/SWDA/SWDA_ACTIVE_ACCREDITED.vue'),
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/activeLicensed',
    name: 'swda_active_licensed',
    component: () => import('../views/User/SWDA/SWDA_ACTIVE_LICENSED.vue'),
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/activeRegistered',
    name: 'swda_active_Registered',
    component: () => import('../views/User/SWDA/SWDA_ACTIVE_REGISTERED.vue'),
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/expiredAccredited',
    name: 'swda_expired_accredited',
    component: () => import('../views/User/SWDA/SWDA_EXPIRED_ACCREDITED.vue'),
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/expiredDelisted',
    name: 'swda_expired_delisted',
    component: () => import('../views/User/SWDA/SWDA_EXPIRED_DELISTED.vue'),
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/expiredLicensed',
    name: 'swda_expired_licensed',
    component: () => import('../views/User/SWDA/SWDA_EXPIRED_LICENCED.vue'),
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/expiredRegistered',
    name: 'swda_active_registered',
    component: () => import('../views/User/SWDA/SWDA_EXPIRED_REGISTERED.vue'),
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/modAuxillary',
    name: 'swda_mod_auxillary',
    component: () => import('../views/User/SWDA/SWDA_MOD_AUXILLARY.vue'),
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modCombased',
    name: 'swda_mod_combased',
    component: () => import('../views/User/SWDA/SWDA_MOD_COMBASED.vue'),
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modNResidential',
    name: 'swda_mod_nresidential',
    component: () => import('../views/User/SWDA/SWDA_MOD_NRESIDENTIAL.vue'),
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modResidential',
    name: 'swda_mod_residential',
    component: () => import('../views/User/SWDA/SWDA_MOD_RESIDENTIAL.vue'),
    beforeEnter: userRequireAuth,
  },

  // !USER SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !USER SWDA END!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!



  {
    path: '/slp',
    name: 'slp',
    component: () => import('../views/User/SLP/SLP.vue'),
    beforeEnter: userRequireAuth,
  },
  {
    path: '/SLP_PA',
    name: 'slp_pa',
    component: () => import('../views/User/SLP/SLP_PA.vue'),
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_snm',
    name: 'slp_snm',
    component: () => import('../views/User/SLP/SLP_SNM.vue'),
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_bmt',
    name: 'slp_bmt',
    component: () => import('../views/User/SLP/SLP_BMT.vue'),
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_stat',
    name: 'slp_stat',
    component: () => import('../views/User/SLP/SLP_STAT.vue'),
    beforeEnter: userRequireAuth,
  },
  {
    path: '/slp_cba',
    name: 'slp_cba',
    component: () => import('../views/User/SLP/SLP_CBA.vue'),
    beforeEnter: userRequireAuth,
  },
  // USER DASHBOARD END

  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  //catch-all route for 404 errors
  {
    path: '/:catchAll(.*)', // Matches any URL
    name: 'error',
    component: ERROR
  }
]



/**
 * Router instance for handling navigation in the application.
 * @type {import("vue-router").Router}
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
