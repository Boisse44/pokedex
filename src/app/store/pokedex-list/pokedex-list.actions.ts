import { createAction, props } from '@ngrx/store';
import { PokemonEntry } from 'src/app/shared/model/api/pokedex';

export const LOAD_POKEMONS = 'LOAD_POKEMONS';
export const loadPokemonsAction = createAction(LOAD_POKEMONS);

export const LOAD_POKEMONS_SUCCESS = 'LOAD_POKEMONS_SUCCESS';
export const loadPokemonsSuccessAction = createAction(LOAD_POKEMONS_SUCCESS, props<{ pokemons: PokemonEntry[] }>());
export type LoadPokemonSuccessAction = ReturnType<typeof loadPokemonsSuccessAction>;


