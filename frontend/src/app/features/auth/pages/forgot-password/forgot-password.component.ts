import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../../core/services/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ForgotPasswordComponent implements OnInit {
  forgotPasswordForm!: FormGroup;
  isLoading = false;
  errorMessage = '';
  successMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private cdr: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.forgotPasswordForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit(): void {
    if (this.forgotPasswordForm.invalid) {
      this.forgotPasswordForm.get('email')?.markAsTouched();
      return;
    }

    this.isLoading = true;
    this.errorMessage = '';
    this.successMessage = '';
    this.cdr.markForCheck();

    const { email } = this.forgotPasswordForm.value;

    // Assuming AuthService has a resetPassword method
    this.authService.resetPassword(email)
      .subscribe({
        next: () => {
          this.successMessage = 'Enviamos um email com instruções para redefinir sua senha.';
          this.isLoading = false;
          this.forgotPasswordForm.reset();
          this.cdr.markForCheck();
        },
        error: (error) => {
          this.errorMessage = error.message || 'Não foi possível enviar o email de recuperação. Tente novamente.';
          this.isLoading = false;
          this.cdr.markForCheck();
        }
      });
  }
}
