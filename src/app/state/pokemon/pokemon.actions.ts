import { createAction, props } from '@ngrx/store';
import { DetailedPokemon, Pokemon } from '../../types';

export const loadPokemonOfRange = createAction(
  '[POKEMON] Load Pokemon of Range',
  props<{ from: number; to: number }>()
);

export const setPokemonOfRange = createAction(
  '[POKEMON] Set Pokemon of Range',
  props<{ from: number; to: number; pokemon: Pokemon[] }>()
);

export const loadDetailedPokemon = createAction(
  '[POKEMON] Load Detailed Pokemon',
  props<{ name: string }>()
);

export const setDetailedPokemon = createAction(
  '[POKEMON] Set Detailed Pokemon',
  props<{ pokemon: DetailedPokemon | null }>()
);
export const toggleLikePokemon = createAction(
  '[POKEMON] Toggle Like Pokemon',
  props<{ pokemon: string }>()
);
