import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexComponent } from './components/shared/pokedex/pokedex.component';
import { PokedexSimpleComponent } from './components/simple/pokedex-simple/pokedex-simple.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonSmallComponent } from './components/shared/pokemon-small/pokemon-small.component';
import { BigPokemonComponent } from './components/shared/big-pokemon/big-pokemon.component';
import { DashboardComponent } from './components/simple/dashboard/dashboard.component';
import { LoginPureComponent } from './components/shared/login/login-pure.component';
import { LoginSimpleComponent } from './components/simple/login-simple/login-simple.component';
import { NgrxLoginComponent } from './components/ngrx/ngrx-login/ngrx-login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { loginReducer } from './state/login/login.reducer';
import { LoginEffects } from './state/login/login.effects';
import { NgRxDashboardComponent } from './components/ngrx/dashboard/ngrxdashboard.component';
import { NgrxPokedexComponent } from './components/ngrx/ngrx-pokedex/ngrx-pokedex.component';
import { PokemonEffects } from './state/pokemon/pokemon.effects';
import { pokemonReducer } from './state/pokemon/pokemon.reducer';
import { PokedexArrowsComponent } from './components/shared/pokedex/pokedex-arrows/pokedex-arrows.component';
import { NgrxPokemonComponent } from './components/ngrx/ngrx-pokemon/ngrx-pokemon.component';
import { SimpleBigPokemonComponent } from './components/shared/simple-big-pokemon/simple-big-pokemon.component';
import { NgrxWrapperComponent } from './components/ngrx/ngrx-wrapper/ngrx-wrapper.component';
import { SimpleWrapperComponent } from './components/simple/simple-wrapper/simple-wrapper.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginSimpleComponent,
    LoginPureComponent,
    DashboardComponent,
    PokedexComponent,
    PokedexSimpleComponent,
    PokemonSmallComponent,
    BigPokemonComponent,
    NgRxDashboardComponent,
    NgrxLoginComponent,
    NgrxPokedexComponent,
    PokedexArrowsComponent,
    NgrxPokemonComponent,
    SimpleBigPokemonComponent,
    NgrxWrapperComponent,
    SimpleWrapperComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    StoreModule.forRoot({
      login: loginReducer,
      pokemon: pokemonReducer,
    }),
    EffectsModule.forRoot([LoginEffects, PokemonEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
