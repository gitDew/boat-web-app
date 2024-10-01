import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { NotificationService } from '../notification.service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
  hasLoginError: boolean = false;
  loginForm = new FormGroup({
    email: new FormControl('user@boats.com', [
      Validators.required,
      Validators.email,
    ]),
    password: new FormControl('iloveboats', [Validators.required]),
  });
  constructor(
    public authService: AuthService,
    private router: Router,
    private notificationService: NotificationService,
  ) {}

  onSubmit(): void {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: () => {
          this.router.navigate(['/boats']);
        },
        error: () => {
          this.notificationService.openSnackBar('Login failed.', 'Dismiss');
          this.loginForm.controls['password'].setValue('');
        },
      });
  }
}
