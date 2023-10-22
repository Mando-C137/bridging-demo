import { Component } from '@angular/core';
import { LoginState } from '../../../state/login/login.reducer';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import * as LoginActions from '../../../state/login/login.actions';
import { Credentials } from '../../../types';

@Component({
  selector: 'app-ngrx-login',
  template: `<app-login-pure
    [error]="error$ | async"
    [loading]="(loading$ | async) ?? false"
    (onSubmit)="login($event)"
  />`,
})
export class NgrxLoginComponent {
  error$: Observable<string | null>;
  loading$: Observable<boolean>;

  constructor(private store: Store<{ login: LoginState }>) {
    this.error$ = store.select((state) => state.login.error);
    this.loading$ = store.select((state) => state.login.pending);
  }

  login(credentials: Credentials) {
    this.store.dispatch(LoginActions.logInAction({ ...credentials }));
  }
}
