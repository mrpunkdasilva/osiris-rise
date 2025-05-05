import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  isLoading = false;
  errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });

    // Redirect if already logged in
    if (this.authService.isAuthenticated()) {
      this.router.navigate(['/dashboard']);
    }
  }

  passwordMatchValidator(control: AbstractControl): ValidationErrors | null {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (password?.value !== confirmPassword?.value) {
      confirmPassword?.setErrors({ passwordMismatch: true });
      return { passwordMismatch: true };
    }

    return null;
  }

  onSubmit(): void {
    if (this.registerForm.invalid) {
      // Mark all fields as touched to trigger validation messages
      Object.keys(this.registerForm.controls).forEach(key => {
        const control = this.registerForm.get(key);
        control?.markAsTouched();
      });
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.cdr.markForCheck();

    const { name, email, password } = this.registerForm.value;

    this.authService.register(name, email, password)
      .subscribe({
        next: () => {
          // After successful registration, log the user in
          this.authService.login(email, password)
            .subscribe({
              next: () => {
                this.router.navigate(['/dashboard']);
              },
              error: (error) => {
                // If login fails after registration, redirect to login page
                this.router.navigate(['/auth/login']);
              }
            });
        },
        error: (error) => {
          this.errorMessage = error.message || 'Falha ao registrar. Tente novamente.';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }
}
