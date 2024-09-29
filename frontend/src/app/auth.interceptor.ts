import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);

  if (authService.isLoggedIn) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.token}`,
      },
    });
  }
  return next(req);
};
