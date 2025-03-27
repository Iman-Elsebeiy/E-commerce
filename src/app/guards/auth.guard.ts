import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  const isLoggedIn = !!localStorage.getItem('access_token'); // Check if the user is logged in

  if (isLoggedIn) {
    return true; // Allow navigation
  } else {
    alert('User not logged in'); // Notify the user
    return false; // Prevent navigation
  }
};
