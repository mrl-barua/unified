import { createRouter, createWebHistory } from 'vue-router'
import LoginForm from '../views/LoginForm.vue'
import CBSS from '../views/User/CBSS/CBSS.vue'
import HR from '../views/User/HR/HR.vue'
import OSP from '../views/User/OSP/OSP.vue'


import SWDA from '../views/User/SWDA/SWDA.vue'
import SWDA_AGENCY from '../views/User/SWDA/SWDA_AGENCIES.vue'
import SWDAView from '../views/User/SWDA/SWDA_VIEW.vue'


import SWDA_ACTIVE_ACCREDITED from '../views/User/SWDA/SWDA_ACTIVE_ACCREDITED.vue'
import SWDA_ACTIVE_LICENSED from '../views/User/SWDA/SWDA_ACTIVE_LICENSED.vue'
import SWDA_ACTIVE_REGISTERED from '../views/User/SWDA/SWDA_ACTIVE_REGISTERED.vue'

import SWDA_EXPIRED_ACCREDITED from '../views/User/SWDA/SWDA_EXPIRED_ACCREDITED.vue'
import SWDA_EXPIRED_DELISTED from '../views/User/SWDA/SWDA_EXPIRED_DELISTED.vue'
import SWDA_EXPIRED_LICENSED from '../views/User/SWDA/SWDA_EXPIRED_LICENCED.vue'
import SWDA_EXPIRED_REGISTERED from '../views/User/SWDA/SWDA_EXPIRED_REGISTERED.vue'
import SWDA_MOD_AUXILLARY from '../views/User/SWDA/SWDA_MOD_AUXILLARY.vue'
import SWDA_MOD_COMBASED from '../views/User/SWDA/SWDA_MOD_COMBASED.vue'
import SWDA_MOD_NRESIDENTIAL from '../views/User/SWDA/SWDA_MOD_NRESIDENTIAL.vue'
import SWDA_MOD_RESIDENTIAL from '../views/User/SWDA/SWDA_MOD_RESIDENTIAL.vue'


import SLP from '../views/User/SLP/SLP.vue'
// insert SLP ref
import SLP_PA from '../views/User/SLP/SLP_PA.vue'
import SLP_SNM from '../views/User/SLP/SLP_SNM.vue'
import SLP_BMT from '../views/User/SLP/SLP_BMT.vue'
import SLP_STAT from '../views/User/SLP/SLP_STAT.vue'
import SLP_CBA from '../views/User/SLP/SLP_CBA.vue'


import AdminCBSS from '../views/Admin/AdminCBSS/AdminCBSS.vue'
import AdminCBSSArchive from '../views/Admin/AdminCBSS/AdminCBSS_Archive.vue'
import AdminCBSSCreate from '../views/Admin/AdminCBSS/AdminCBSSCreate.vue'
import AdminCBSSEdit from '../views/Admin/AdminCBSS/AdminCBSSEdit.vue'
import AdminCBSSView from '../views/Admin/AdminCBSS/AdminCBSSView.vue'
import AdminCBSSViewHistory from '../views/Admin/AdminCBSS/AdminCBSS_EditHistory.vue'
import AdminCBSSViewHistoryVIEW from '../views/Admin/AdminCBSS/AdminCBSS_EditHistory_View.vue'


import AdminHR from '../views/Admin/AdminHR/AdminHR.vue'
import AdminHRArchive from '../views/Admin/AdminHR/AdminHR_Archive.vue'
import AdminHRCreate from '../views/Admin/AdminHR/AdminHRCreate.vue'
import AdminHREdit from '../views/Admin/AdminHR/AdminHREdit.vue'
import AdminHRView from '../views/Admin/AdminHR/AdminHRView.vue'



import AdminSLP from '../views/Admin/AdminSLP/AdminSLP.vue'


import AdminOSP from '../views/Admin/AdminOSP/AdminOSP.vue'
import AdminOSP_Archive from '../views/Admin/AdminOSP/AdminOSP_Archive.vue'
import AdminOSPCreate from '../views/Admin/AdminOSP/AdminOSPCreate.vue'
import AdminOSPEdit from '../views/Admin/AdminOSP/AdminOSPEdit.vue'
import AdminOSPView from '../views/Admin/AdminOSP/AdminOSPView.vue'

import AdminSWDA from '../views/Admin/AdminSWDA/AdminSWDA.vue'
import AdminSWDA_Archive from '../views/Admin/AdminSWDA/AdminSWDA_Archive.vue'
import AdminSWDACreate from '../views/Admin/AdminSWDA/AdminSWDACreate'
import AdminSWDAEdit from '../views/Admin/AdminSWDA/AdminSWDAEdit'
import AdminSWDAView from '../views/Admin/AdminSWDA/AdminSwdaView'
import AdminSWDAViewHistory from '../views/Admin/AdminSWDA/AdminSwda_EditHistory.vue'
import AdminSWDAViewHistoryVIEW from '../views/Admin/AdminSWDA/AdminSwda_EditHistory_View.vue'


import SettingDashboard from '../views/Admin/Settings_Pages/SettingDashboard'

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

  // ADMIN DASHBOARD START
  {
    path: '/admincbss',
    name: 'adminCBSS',
    component: AdminCBSS,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/admincbss/archive',
    name: 'adminCBSSArchive',
    component: AdminCBSSArchive,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/admincbss/create',
    name: 'AdminCBSSCreate',
    component: AdminCBSSCreate,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/admincbss/:ID/edit',
    name: 'AdminCBSSEdit',
    component: AdminCBSSEdit,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/admincbss/:ID/view',
    name: 'AdminCBSSView',
    component: AdminCBSSView,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/admincbss/:ID/editHistory',
    name: 'editCbssHistory',
    component: AdminCBSSViewHistory,
    beforeEnter: adminRequireAuth,
  },



  {
    path: '/admincbss/:ID/editHistory/view',
    name: 'editCbssHistoryView',
    component: AdminCBSSViewHistoryVIEW,
    beforeEnter: adminRequireAuth,
  },


  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!


  {
    path: '/adminhr',
    name: 'adminhr',
    component: AdminHR,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr/archive',
    name: 'adminHRArchive',
    component: AdminHRArchive,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr/create',
    name: 'AdminHRCreate',
    component: AdminHRCreate,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr/:ID/edit',
    name: 'AdminHREdit',
    component: AdminHREdit,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminhr/:ID/view',
    name: 'AdminHRView',
    component: AdminHRView,
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
    path: '/adminosp/archive',
    name: 'adminhrArchive',
    component: AdminOSP_Archive,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminosp/create',
    name: 'AdminOSPCreate',
    component: AdminOSPCreate,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminosp/:ID/edit',
    name: 'AdminOSPEdit',
    component: AdminOSPEdit,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminosp/:ID/view',
    name: 'AdminOSPView',
    component: AdminOSPView,
    beforeEnter: adminRequireAuth,
  },





  {
    path: '/adminswda',
    name: 'adminswda',
    component: AdminSWDA,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminswda/archive',
    name: 'adminswdaArchive',
    component: AdminSWDA_Archive,
    beforeEnter: adminRequireAuth,
  },

  {
    path: '/adminswda/create',
    name: 'AdminSWDACreate',
    component: AdminSWDACreate,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminswda/:ID/editHistory',
    name: 'editHistory',
    component: AdminSWDAViewHistory,
    beforeEnter: adminRequireAuth,
  },



  {
    path: '/adminswda/:ID/editHistory/view',
    name: 'editHistoryView',
    component: AdminSWDAViewHistoryVIEW,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminswda/:ID/view',
    name: 'AdminSWDAView',
    component: AdminSWDAView,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminswda/:ID/edit',
    name: 'AdminSWDAEdit',
    component: AdminSWDAEdit,
    beforeEnter: adminRequireAuth,
  },


  {
    path: '/adminSettings',
    name: 'SettingDashboard',
    component: SettingDashboard,
    beforeEnter: adminRequireAuth,
  },

  // ADMIN DASHBOARD END







  //  USER DASHBOARD START
  {
    path: '/cbss',
    name: 'cbss',
    component: CBSS,
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


  // USER SWDA START
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
    path: '/swda/:ID/view',
    name: 'SWDAView',
    component: SWDAView,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/activeAccredited',
    name: 'swda_active_accredited',
    component: SWDA_ACTIVE_ACCREDITED,
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/activeLicensed',
    name: 'swda_active_licensed',
    component: SWDA_ACTIVE_LICENSED,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/activeRegistered',
    name: 'swda_active_Registered',
    component: SWDA_ACTIVE_REGISTERED,
    beforeEnter: userRequireAuth,
  },






  {
    path: '/swda/expiredAccredited',
    name: 'swda_expired_accredited',
    component: SWDA_EXPIRED_ACCREDITED,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/expiredDelisted',
    name: 'swda_expired_delisted',
    component: SWDA_EXPIRED_DELISTED,
    beforeEnter: userRequireAuth,
  },


  {
    path: '/swda/expiredLicensed',
    name: 'swda_expired_licensed',
    component: SWDA_EXPIRED_LICENSED,
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/expiredRegistered',
    name: 'swda_active_registered',
    component: SWDA_EXPIRED_REGISTERED,
    beforeEnter: userRequireAuth,
  },



  {
    path: '/swda/modAuxillary',
    name: 'swda_mod_auxillary',
    component: SWDA_MOD_AUXILLARY,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modCombased',
    name: 'swda_mod_combased',
    component: SWDA_MOD_COMBASED,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modNResidential',
    name: 'swda_mod_nresidential',
    component: SWDA_MOD_NRESIDENTIAL,
    beforeEnter: userRequireAuth,
  },

  {
    path: '/swda/modResidential',
    name: 'swda_mod_residential',
    component: SWDA_MOD_RESIDENTIAL,
    beforeEnter: userRequireAuth,
  },

  // USER SWDA END





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
