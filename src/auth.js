// auth.js
import Swal from 'sweetalert2';
import router from './router';
let logoutTimer;

// GENERAL USER AUTH
export function userIsAuthenticated() {
  // Check if the user is authenticated
  const user = sessionStorage.getItem('user');
  return user !== null;
}

// SUPER ADMIN AUTH
export function adminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('admin');
  return user !== null;
}

// SWDA ADMIN AUTH
export function swdaAdminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('swdaAdmin');
  return user !== null;
}

// CBSS ADMIN AUTH
export function cbssAdminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('cbssAdmin');
  return user !== null;
}

// HR ADMIN AUTH
export function hrAdminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('hrAdmin');
  return user !== null;
}

// OSD ADMIN AUTH
export function osdAdminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('osdAdmin');
  return user !== null;
}





export function startAutoLogout() {
  // Set a timer for 1 hour (3,600,000 milliseconds)
  logoutTimer = setTimeout(() => {
    // Display a SweetAlert when the timer expires
    Swal.fire({
      title: "Session expired",
      text: "Your session has expired. You will be logged out.",
      icon: "warning"
    }).then(() => {
      // Log the user out after they acknowledge the alert
      logout(); // Make sure this function de-authenticates the user
    }).then(() => {
      // After the user is logged out, redirect to the login page
      router.push('/');
      window.location.reload();
    });
  }, 3600000); // 1 Hour Session
}

export function clearAutoLogout() {
  // Clear the auto-logout timer (e.g., when the user performs actions)
  clearTimeout(logoutTimer);
}

export function logout() {
  // Perform logout actions (e.g., clear session storage)
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('admin');
  sessionStorage.removeItem('cbssAdmin')
  sessionStorage.removeItem('swdaAdmin')
  sessionStorage.removeItem('osdAdmin')
  sessionStorage.removeItem('hrAdmin')
  localStorage.removeItem('name');
}
