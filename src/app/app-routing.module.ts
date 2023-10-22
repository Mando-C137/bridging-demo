import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexSimpleComponent } from './components/simple/pokedex-simple/pokedex-simple.component';
import { BigPokemonComponent } from './components/shared/big-pokemon/big-pokemon.component';
import { DashboardComponent } from './components/simple/dashboard/dashboard.component';
import { LoginSimpleComponent } from './components/simple/login-simple/login-simple.component';
import { NgrxLoginComponent } from './components/ngrx/ngrx-login/ngrx-login.component';
import { NgRxDashboardComponent } from './components/ngrx/dashboard/ngrxdashboard.component';
import { NgrxPokedexComponent } from './components/ngrx/ngrx-pokedex/ngrx-pokedex.component';
import { NgrxPokemonComponent } from './components/ngrx/ngrx-pokemon/ngrx-pokemon.component';

const routes: Routes = [
  {
    path: 'simple',
    title: 'simple',
    children: [
      { path: 'login', component: LoginSimpleComponent },
      { path: 'dashboard', component: DashboardComponent },
      {
        path: 'pokedex',
        children: [
          { path: '', component: PokedexSimpleComponent },
          { path: ':id', component: BigPokemonComponent },
        ],
      },
    ],
  },
  {
    path: 'ngrx',
    title: 'ngrx',
    children: [
      { path: 'login', component: NgrxLoginComponent },
      { path: 'dashboard', component: NgRxDashboardComponent },
      {
        path: 'pokedex',
        children: [
          { path: '', component: NgrxPokedexComponent },
          { path: ':id', component: NgrxPokemonComponent },
        ],
      },
    ],
  },
  { path: '**', redirectTo: 'simple/login' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
