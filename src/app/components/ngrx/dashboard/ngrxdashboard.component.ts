import { Component } from '@angular/core';
import { LoginState } from '../../../state/login/login.reducer';
import { Store } from '@ngrx/store';
import { logInAction, logOutAction } from '../../../state/login/login.actions';
import { Observable } from 'rxjs';
import { PokemonState } from '../../../state/pokemon/pokemon.reducer';

@Component({
  selector: 'app-dashboard',
  template: `
    <div
      class="absolute left-0 top-0 w-full flex h-16 p-2 items-center justify-center "
    >
      <button
        class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
        (click)="logout()"
      >
        Logout
      </button>
    </div>
    <main class="relative">
      <p
        class="font-bold text-2xl text-slate-900"
        *ngIf="username$ | async as username"
      >
        Hello {{ username }}, You are logged in
      </p>
      <div class="grid grid-cols-3 ">
        <a routerLink="/ngrx/pokedex">
          <h2 class="text-lg cursor-pointer">View Pokedex</h2>
        </a>
      </div>
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
