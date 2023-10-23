import { Component } from '@angular/core';
import { LoginState } from '../../../state/login/login.reducer';
import { Store } from '@ngrx/store';
import { logOutAction } from '../../../state/login/login.actions';
import { Observable } from 'rxjs';
import { PokemonState } from '../../../state/pokemon/pokemon.reducer';

@Component({
  selector: 'app-ngrx-dashboard',
  template: `
    <main class="relative">
      <p
        class="font-bold text-2xl text-slate-900"
        *ngIf="username$ | async as username"
      >
        Hello {{ username }}, You are logged in
      </p>
      <p>Your favorite Pokemon are : {{ favorites$ | async }}</p>
    </main>
  `,
})
export class NgRxDashboardComponent {
  username$: Observable<string>;
  favorites$: Observable<string>;

  constructor(
    private store: Store<{ login: LoginState; pokemon: PokemonState }>
  ) {
    this.username$ = this.store.select(
      (state) => state.login.username ?? 'ERROR'
    );
    this.favorites$ = this.store.select((state) =>
      state.pokemon.favorites.map((pkm) => pkm.name).join(', ')
    );
  }

  logout() {
    this.store.dispatch(logOutAction());
  }
}
