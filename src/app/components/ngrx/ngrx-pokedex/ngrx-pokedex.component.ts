import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable, map, mergeMap } from 'rxjs';
import { PokemonApiService } from '../../../service/pokemon-api.service';
import { Pokemon } from '../../../types';
import { PokemonState } from '../../../state/pokemon/pokemon.reducer';
import { Store } from '@ngrx/store';
import * as PokemonActions from '../../../state/pokemon/pokemon.actions';

@Component({
  selector: 'app-pokedex-simple',
  template: `
    <div *ngIf="currentPokemons$ | async as data" class="flex flex-col gap-2">
      <app-pokedex [pokemonList]="data" />
      <app-pokedex-arrows [from]="(from$ | async)!" [to]="(to$ | async)!" />
    </div>
  `,
})
export class NgrxPokedexComponent implements OnInit {
  currentPokemons$: Observable<Pokemon[]>;
  from$: Observable<number>;
  to$: Observable<number>;

  constructor(
    private route: ActivatedRoute,
    private store: Store<{ pokemon: PokemonState }>
  ) {
    this.currentPokemons$ = this.store.select(
      (state) => state.pokemon.currentlySelectedPokemon
    );
    this.from$ = this.store.select((state) => state.pokemon.from);
    this.to$ = this.store.select((state) => state.pokemon.to);
  }
  ngOnInit(): void {
    this.route.queryParamMap
      .pipe(
        map((params) => {
          const from = params.get('from') ? Number(params.get('from')) : 0;
          const to = params.get('to') ? Number(params.get('to')) : 5;
          return { from, to };
        })
      )
      .subscribe((data) =>
        this.store.dispatch(PokemonActions.loadPokemonOfRange({ ...data }))
      );
  }
}
