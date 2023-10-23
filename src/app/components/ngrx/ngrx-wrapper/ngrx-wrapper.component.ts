import { Component } from '@angular/core';
import { LoginState } from '../../../state/login/login.reducer';
import { Store } from '@ngrx/store';
import * as LoginActions from '../../../state/login/login.actions';

@Component({
  selector: 'app-ngrx-wrapper',
  template: ` <nav
      class="absolute left-0 top-0 w-full h-16 p-2 items-center justify-center "
    >
      <ul class="flex justify-evenly p-2 ">
        <li>
          <button
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            (click)="logout()"
          >
            Logout
          </button>
        </li>
        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../dashboard"
          >
            Dashboard
          </a>
        </li>

        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../pokedex"
          >
            Pokedex
          </a>
        </li>
        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../pokedex/lugia"
          >
            Lugia
          </a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`,
})
export class NgrxWrapperComponent {
  constructor(private store: Store<{ login: LoginState }>) {}

  logout() {
    this.store.dispatch(LoginActions.logOutAction());
  }
}
