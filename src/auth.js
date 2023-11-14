// auth.js

let logoutTimer;

export function userIsAuthenticated() {
  // Check if the user is authenticated
  const user = sessionStorage.getItem('user');
  return user !== null;
}

export function adminIsAuthenticated() {
  // Check if the user is authenticated 
  const user = sessionStorage.getItem('admin');
  return user !== null;
}

export function startAutoLogout() {
  // Set a timer for 1 minute (60,000 milliseconds)
  logoutTimer = setTimeout(() => {
    // Log the user out when the timer expires
    logout();
  }, 60000000); // 1 Hour Session

}

export function clearAutoLogout() {
  // Clear the auto-logout timer (e.g., when the user performs actions)
  clearTimeout(logoutTimer);
}

export function logout() {
  // Perform logout actions (e.g., clear session storage)
  sessionStorage.removeItem('user');
  sessionStorage.removeItem('admin');
}
