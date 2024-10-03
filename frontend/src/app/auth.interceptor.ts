import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';
import { catchError, of, throwError } from 'rxjs';
import { NotificationService } from './notification.service';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authService = inject(AuthService);
  const notificationService = inject(NotificationService);

  if (authService.isLoggedIn) {
    req = req.clone({
      setHeaders: {
        Authorization: `Bearer ${authService.token}`,
      },
    });
  }
  return next(req).pipe(
    catchError((err) => {
      if (err.status === 403) {
        notificationService.openSnackBar(
          "Sorry, you're not authorized.",
          'Dismiss',
        );
        return of();
      }
      return throwError(() => err);
    }),
  );
};
