// auth.js
export function userIsAuthenticated() {
  // Check if the user is authenticated (you can customize this logic)
  const user = localStorage.getItem('user');
  return user !== null;
}

export function adminIsAuthenticated() {
  // Check if the user is authenticated (you can customize this logic)
  const user = localStorage.getItem('admin');
  return user !== null;
}
