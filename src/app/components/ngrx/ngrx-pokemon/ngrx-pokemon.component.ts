import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokemonState } from '../../../state/pokemon/pokemon.reducer';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../../state/pokemon/pokemon.actions';
import { DetailedPokemon } from '../../../types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-ngrx-pokemon',
  template: `<app-pokemon-route-simple
    *ngIf="pokemon$ | async as pokemon"
    [pokemon]="pokemon"
    [isLiked]="(liked$ | async) ?? false"
    (likeEmitter)="toggleLiked()"
  />`,
})
export class NgrxPokemonComponent {
  pokemon$: Observable<DetailedPokemon | null>;
  liked$: Observable<boolean>;
  routeParamId!: string;
  constructor(
    private route: ActivatedRoute,
    private store: Store<{ pokemon: PokemonState }>
  ) {
    this.routeParamId = this.route.snapshot.params['id']!;
    this.pokemon$ = this.store.select((state) => state.pokemon.routePokemon);
    this.liked$ = this.store.select((state) =>
      state.pokemon.favorites.map((pkm) => pkm.name).includes(this.routeParamId)
    );
  }

  ngOnInit(): void {
    this.store.dispatch(
      PokemonActions.loadDetailedPokemon({ name: this.routeParamId })
    );
  }
  toggleLiked() {
    this.store.dispatch(
      PokemonActions.toggleLikePokemon({ pokemon: this.routeParamId })
    );
  }
}
