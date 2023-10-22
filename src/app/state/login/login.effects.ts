import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { exhaustMap, map, catchError, EMPTY, mergeMap, of, tap } from 'rxjs';
import { LoginService } from '../../service/login.service';
import * as LoginActions from './login.actions';
import { Router } from '@angular/router';

@Injectable()
export class LoginEffects {
  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logInAction),
      mergeMap((data) =>
        this.loginService
          .login({
            password: data.password,
            username: data.username,
          })
          .pipe(
            map((res) =>
              res.success
                ? LoginActions.logInSuccesAction()
                : LoginActions.logInErrorAction({ error: 'Unbekannter Fehler' })
            ),
            catchError((e) =>
              of(LoginActions.logInErrorAction({ error: 'Wrong Credentials' }))
            )
          )
      )
    )
  );
  logOut$ = createEffect(() =>
    this.actions$.pipe(
      ofType(LoginActions.logOutAction),
      mergeMap((_data) =>
        this.loginService.logout().pipe(
          map((res) =>
            res.success
              ? LoginActions.logOutSuccesAction()
              : LoginActions.logOutErrorAction({ error: 'Unbekannter Fehler' })
          ),
          catchError((e) =>
            of(LoginActions.logInErrorAction({ error: 'Unbekannter Fehler' }))
          )
        )
      )
    )
  );

  loginSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logInSuccesAction),
        tap(() => this.router.navigate(['ngrx', 'dashboard']))
      ),
    { dispatch: false }
  );
  logOutSuccess$ = createEffect(
    () =>
      this.actions$.pipe(
        ofType(LoginActions.logOutSuccesAction),
        tap(() => this.router.navigate(['ngrx', 'login']))
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private loginService: LoginService,
    private router: Router
  ) {}
}
