import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { LoginService } from '../../../service/login.service';
import { Credentials } from '../../../types';

@Component({
  selector: 'app-login-simple',
  template: `
    <app-login-pure
      (onSubmit)="login($event)"
      [error]="error"
      [loading]="loading"
    />
  `,
})
export class LoginSimpleComponent implements OnInit, OnDestroy {
  loginService = inject(LoginService);
  router = inject(Router);

  subscription = new Subscription();

  error!: string | null;
  loading: boolean = false;

  ngOnInit(): void {
    this.error = '';
  }

  login(credentials: Credentials) {
    const logInResponse = this.loginService.login({
      ...credentials,
    });
    this.loading = true;

    const subscriptionToResponse = logInResponse.subscribe({
      next: (value) => {
        this.loading = false;
        if (value.success) {
          this.router.navigate(['simple/dashboard']);
        } else {
          this.error = value.error;
        }
      },
    });

    this.subscription.add(subscriptionToResponse);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
