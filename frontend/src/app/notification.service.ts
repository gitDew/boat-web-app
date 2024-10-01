import { inject, Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class NotificationService {
  constructor() {}

  private snackbar = inject(MatSnackBar);

  openSnackBar(message: string, action: string) {
    this.snackbar.open(message, action, { duration: 5000 });
  }
}
