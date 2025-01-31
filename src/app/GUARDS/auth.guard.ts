import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../SERVICES/user.service';

export const authGuard: CanActivateFn = (route, state) => {
 
  const authService= inject(UserService);
  const router =inject(Router);

  if( authService.isLoggedIn()){
    return true;
  }
  else{
    return router.navigate(['/login'])
  }
};
