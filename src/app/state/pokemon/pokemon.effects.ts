import { Injectable } from '@angular/core';
import { createEffect, ofType, Actions } from '@ngrx/effects';
import { mergeMap, map, catchError, of, tap } from 'rxjs';
import * as PokemonActions from './pokemon.actions';
import { PokemonApiService } from '../../service/pokemon-api.service';

@Injectable()
export class PokemonEffects {
  loadPokemonRange$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(PokemonActions.loadPokemonOfRange),
        mergeMap((data) => {
          //hier ggf cacheabgleich
          return this.pokemonService.fetchPokedex({
            from: data.from,
            to: data.to,
          });
        })
      )
      .pipe(
        map((res) =>
          PokemonActions.setPokemonOfRange({
            pokemon: res.results,
            from: res.from,
            to: res.to,
          })
        ),
        catchError((e) =>
          of(
            PokemonActions.setPokemonOfRange({
              from: 0,
              to: 0,
              pokemon: [],
            })
          )
        )
      )
  );

  loadDetailedPokemon$ = createEffect(() =>
    this.actions$
      .pipe(
        ofType(PokemonActions.loadDetailedPokemon),
        tap((data) => console.log(data)),
        mergeMap(({ name }) => this.pokemonService.fetchPokemonByName(name))
      )
      .pipe(
        map((res) => PokemonActions.setDetailedPokemon({ pokemon: res })),
        catchError((e) =>
          of(PokemonActions.setDetailedPokemon({ pokemon: null }))
        )
      )
  );

  constructor(
    private actions$: Actions,
    private pokemonService: PokemonApiService
  ) {}
}
