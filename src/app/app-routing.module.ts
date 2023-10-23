import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexSimpleComponent } from './components/simple/pokedex-simple/pokedex-simple.component';
import { DashboardComponent } from './components/simple/dashboard/dashboard.component';
import { LoginSimpleComponent } from './components/simple/login-simple/login-simple.component';
import { NgrxLoginComponent } from './components/ngrx/ngrx-login/ngrx-login.component';
import { NgRxDashboardComponent } from './components/ngrx/dashboard/ngrxdashboard.component';
import { NgrxPokedexComponent } from './components/ngrx/ngrx-pokedex/ngrx-pokedex.component';
import { NgrxPokemonComponent } from './components/ngrx/ngrx-pokemon/ngrx-pokemon.component';
import { SimpleBigPokemonComponent } from './components/shared/simple-big-pokemon/simple-big-pokemon.component';
import { NgrxWrapperComponent } from './components/ngrx/ngrx-wrapper/ngrx-wrapper.component';
import { SimpleWrapperComponent } from './components/simple/simple-wrapper/simple-wrapper.component';

const routes: Routes = [
  {
    path: 'simple',
    title: 'simple',
    children: [
      { path: 'login', component: LoginSimpleComponent },
      {
        path: 'dashboard',
        component: SimpleWrapperComponent,
        children: [{ path: '', component: DashboardComponent }],
      },
      {
        path: 'pokedex',
        component: SimpleWrapperComponent,
        children: [
          { path: '', component: PokedexSimpleComponent },
          { path: ':id', component: SimpleBigPokemonComponent },
        ],
      },
    ],
  },
  {
    path: 'ngrx',
    title: 'ngrx',
    children: [
      { path: 'login', component: NgrxLoginComponent },
      {
        path: 'dashboard',
        component: NgrxWrapperComponent,
        children: [{ path: '', component: NgRxDashboardComponent }],
      },
      {
        path: 'pokedex',
        component: NgrxWrapperComponent,
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
