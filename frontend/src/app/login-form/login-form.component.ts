import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router, RouterLink } from '@angular/router';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css',
})
export class LoginFormComponent {
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
  ) {}

  onSubmit(): void {
    this.authService
      .login(this.loginForm.value.email!, this.loginForm.value.password!)
      .subscribe({
        next: () => {this.router.navigate(['/boats'])},
        error: () => {console.log("Authentication failed.")}
      });
  }
}
