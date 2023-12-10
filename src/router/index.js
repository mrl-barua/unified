import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
// import CBSS from '../views/User/CBSS/CBSS.vue'
// import HR from '../views/User/HR/HR.vue'
// import OSP from '../views/User/OSP/OSP.vue'


// import SWDA from '../views/User/SWDA/SWDA.vue'
// import SWDA_AGENCY from '../views/User/SWDA/SWDA_AGENCIES.vue'
// import SWDAView from '../views/User/SWDA/SWDA_VIEW.vue'


// import SWDA_ACTIVE_ACCREDITED from '../views/User/SWDA/SWDA_ACTIVE_ACCREDITED.vue'
// import SWDA_ACTIVE_LICENSED from '../views/User/SWDA/SWDA_ACTIVE_LICENSED.vue'
// import SWDA_ACTIVE_REGISTERED from '../views/User/SWDA/SWDA_ACTIVE_REGISTERED.vue'

// import SWDA_EXPIRED_ACCREDITED from '../views/User/SWDA/SWDA_EXPIRED_ACCREDITED.vue'
// import SWDA_EXPIRED_DELISTED from '../views/User/SWDA/SWDA_EXPIRED_DELISTED.vue'
// import SWDA_EXPIRED_LICENSED from '../views/User/SWDA/SWDA_EXPIRED_LICENCED.vue'
// import SWDA_EXPIRED_REGISTERED from '../views/User/SWDA/SWDA_EXPIRED_REGISTERED.vue'
// import SWDA_MOD_AUXILLARY from '../views/User/SWDA/SWDA_MOD_AUXILLARY.vue'
// import SWDA_MOD_COMBASED from '../views/User/SWDA/SWDA_MOD_COMBASED.vue'
// import SWDA_MOD_NRESIDENTIAL from '../views/User/SWDA/SWDA_MOD_NRESIDENTIAL.vue'
// import SWDA_MOD_RESIDENTIAL from '../views/User/SWDA/SWDA_MOD_RESIDENTIAL.vue'


// import SLP from '../views/User/SLP/SLP.vue'
// // insert SLP ref
// import SLP_PA from '../views/User/SLP/SLP_PA.vue'
// import SLP_SNM from '../views/User/SLP/SLP_SNM.vue'
// import SLP_BMT from '../views/User/SLP/SLP_BMT.vue'
// import SLP_STAT from '../views/User/SLP/SLP_STAT.vue'
// import SLP_CBA from '../views/User/SLP/SLP_CBA.vue'


// import AdminCBSS from '../views/Admin/AdminCBSS/AdminCBSS.vue'
// import AdminCBSSArchive from '../views/Admin/AdminCBSS/AdminCBSS_Archive.vue'
// import AdminCBSSCreate from '../views/Admin/AdminCBSS/AdminCBSSCreate.vue'
// import AdminCBSSEdit from '../views/Admin/AdminCBSS/AdminCBSSEdit.vue'
// import AdminCBSSView from '../views/Admin/AdminCBSS/AdminCBSSView.vue'
// import AdminCBSSViewHistory from '../views/Admin/AdminCBSS/AdminCBSS_EditHistory.vue'
// import AdminCBSSViewHistoryVIEW from '../views/Admin/AdminCBSS/AdminCBSS_EditHistory_View.vue'


// import AdminHR from '../views/Admin/AdminHR/AdminHR.vue'
// import AdminHRArchive from '../views/Admin/AdminHR/AdminHR_Archive.vue'
// import AdminHRCreate from '../views/Admin/AdminHR/AdminHRCreate.vue'
// import AdminHREdit from '../views/Admin/AdminHR/AdminHREdit.vue'
// import AdminHRView from '../views/Admin/AdminHR/AdminHRView.vue'



// import AdminSLP from '../views/Admin/AdminSLP/AdminSLP.vue'


// import AdminOSP from '../views/Admin/AdminOSP/AdminOSP.vue'
// import AdminOSP_Archive from '../views/Admin/AdminOSP/AdminOSP_Archive.vue'
// import AdminOSPCreate from '../views/Admin/AdminOSP/AdminOSPCreate.vue'
// import AdminOSPEdit from '../views/Admin/AdminOSP/AdminOSPEdit.vue'
// import AdminOSPView from '../views/Admin/AdminOSP/AdminOSPView.vue'

// import AdminSWDA from '../views/Admin/AdminSWDA/AdminSWDA.vue'
// import AdminSWDA_Archive from '../views/Admin/AdminSWDA/AdminSWDA_Archive.vue'
// import AdminSWDACreate from '../views/Admin/AdminSWDA/AdminSWDACreate'
// import AdminSWDAEdit from '../views/Admin/AdminSWDA/AdminSWDAEdit'
// import AdminSWDAView from '../views/Admin/AdminSWDA/AdminSwdaView'
// import AdminSWDAViewHistory from '../views/Admin/AdminSWDA/AdminSwda_EditHistory.vue'
// import AdminSWDAViewHistoryVIEW from '../views/Admin/AdminSWDA/AdminSwda_EditHistory_View.vue'


import SettingDashboard from '../views/Admin/Settings_Pages/SettingDashboard'
import AddSettingUsers from '../views/Admin/Settings_Pages/addUserAccess'
import EditSettingUsers from '../views/Admin/Settings_Pages/editUserAccess'
import ERROR from '../views/404.vue' // Import the 404 Error Page
import { userIsAuthenticated } from '../auth'; // Import the user authentication function
import { adminIsAuthenticated } from '../auth'; // Import the admin authentication function
import { startAutoLogout, clearAutoLogout, logout } from '../auth';
import Swal from 'sweetalert2'

/**
 * Middleware function to check if the user is authenticated before accessing a route.
 * If the user is authenticated, it allows access to the route.
 * If the user is not authenticated, it redirects to the login page or handles it as needed.
 *
 * @param {Object} to - The target route object being navigated to.
 * @param {Object} from - The current route object being navigated away from.
 * @param {Function} next - A callback function to continue the navigation.
 * @returns {void}
 */
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


/**
 * Middleware function to check if the user is authenticated as an admin.
 * If authenticated, allows access to the route. Otherwise, redirects to the login page.
 *
 * @param {Object} to - The target route object being navigated to.
 * @param {Object} from - The current route object being navigated away from.
 * @param {Function} next - A callback function to continue the navigation.
 * @returns {void}
 */
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
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/archive',
    name: 'adminCBSSArchive',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_Archive.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/create',
    name: 'AdminCBSSCreate',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSCreate.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/:ID/edit',
    name: 'AdminCBSSEdit',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSEdit.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/:ID/view',
    name: 'AdminCBSSView',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSSView.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/:ID/editHistory',
    name: 'editCbssHistory',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_EditHistory.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/admincbss/:ID/editHistory/view',
    name: 'editCbssHistoryView',
    component: () => import('../views/Admin/AdminCBSS/AdminCBSS_EditHistory_View.vue'),
    beforeEnter: adminRequireAuth,
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
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminhr/archive',
    name: 'adminHRArchive',
    component: () => import('../views/Admin/AdminHR/AdminHR_Archive.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminhr/create',
    name: 'AdminHRCreate',
    component: () => import('../views/Admin/AdminHR/AdminHRCreate.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminhr/:ID/edit',
    name: 'AdminHREdit',
    component: () => import('../views/Admin/AdminHR/AdminHREdit.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminhr/:ID/view',
    name: 'AdminHRView',
    component: () => import('../views/Admin/AdminHR/AdminHRView.vue'),
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr/:ID/editHistory',
    name: 'AdminHReditHistory',
    component: () => import('../views/Admin/AdminHR/AdminHR_EditHistory.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminhr/:ID/editHistory/view',
    name: 'AdminHReditHistoryView',
    component: () => import('../views/Admin/AdminHR/AdminHR_EditHistory_View.vue'),
    beforeEnter: adminRequireAuth,
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
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminosp/archive',
    name: 'adminhrArchive',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_Archive.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminosp/create',
    name: 'AdminOSPCreate',
    component: () => import('../views/Admin/AdminOSP/AdminOSPCreate.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminosp/:ID/edit',
    name: 'AdminOSPEdit',
    component: () => import('../views/Admin/AdminOSP/AdminOSPEdit.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminosp/:ID/view',
    name: 'AdminOSPView',
    component: () => import('../views/Admin/AdminOSP/AdminOSPView.vue'),
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminosp/:ID/editHistory',
    name: 'AdminOSPeditHistory',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_EditHistory.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminosp/:ID/editHistory/view',
    name: 'AdminOSPeditHistoryView',
    component: () => import('../views/Admin/AdminOSP/AdminOSP_EditHistory_View.vue'),
    beforeEnter: adminRequireAuth,
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
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/archive',
    name: 'adminswdaArchive',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_Archive.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/create',
    name: 'AdminSWDACreate',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDACreate.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/:ID/editHistory',
    name: 'editHistory',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_EditHistory.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/:ID/editHistory/view',
    name: 'editHistoryView',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDA_EditHistory_View.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/:ID/view',
    name: 'AdminSWDAView',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDAView.vue'),
    beforeEnter: adminRequireAuth,
  },
  {
    path: '/adminswda/:ID/edit',
    name: 'AdminSWDAEdit',
    component: () => import('../views/Admin/AdminSWDA/AdminSWDAEdit.vue'),
    beforeEnter: adminRequireAuth,
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
    component: () => import('../views/User/CBSS/CBSS.vue'),
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
    component: () => import('../views/User/HR/HR.vue'),
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
    component: () => import('../views/User/OSP/OSP.vue'),
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
    component: () => import('../views/User/SWDA/SWDA.vue'),
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
