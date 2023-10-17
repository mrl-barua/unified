// auth.js
export function isAuthenticated() {
  // Check if the user is authenticated (you can customize this logic)
  const user = localStorage.getItem('user');
  return user !== null;
}
