import { createReducer, on } from '@ngrx/store';
import * as PokemonActions from './pokemon.actions';
import { DetailedPokemon, Pokemon } from '../../types';

export type PokemonState = {
  pokemon: Pokemon[];
  from: number;
  to: number;
  currentlySelectedPokemon: Pokemon[];
  favorites: DetailedPokemon[];
  routePokemon: DetailedPokemon | null;
};

const initialState: PokemonState = {
  from: 1,
  to: 6,
  currentlySelectedPokemon: [],
  favorites: [],
  pokemon: [],
  routePokemon: null,
};

export const pokemonReducer = createReducer(
  initialState,
  on(PokemonActions.setPokemonOfRange, (state, action) => {
    return {
      ...state,
      from: action.from,
      to: action.to,
      pokemon: [...state.pokemon, ...action.pokemon], //cached
      currentlySelectedPokemon: action.pokemon,
    };
  }),
  on(PokemonActions.setDetailedPokemon, (state, action) => ({
    ...state,
    routePokemon: action.pokemon,
  })),
  on(PokemonActions.toggleLikePokemon, (state, action) => {
    const isLiked = state.favorites.find(
      (pkm) => pkm.name === action.pokemon || `${pkm.id}` === action.pokemon
    );

    if (isLiked) {
      return {
        ...state,
        favorites: state.favorites.filter(
          (pkm) => pkm.name !== action.pokemon && `${pkm.id}` !== action.pokemon
        ),
      };
    }

    return {
      ...state,
      favorites: [...state.favorites, { ...state.routePokemon! }],
    };
  })
);
