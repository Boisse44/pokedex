import { createAction, props } from '@ngrx/store';
import { PokemonRessource } from 'src/app/shared/model/api/pokemon-ressource';

export const GET_POKEMON_BY_ID = 'GET_POKEMON_BY_ID';
export const getPokemonByIdAction = createAction(GET_POKEMON_BY_ID, props<{ id: number }>());
export type GetPokemonByIdAction = ReturnType<typeof getPokemonByIdAction>;

export const GET_POKEMON_BY_ID_SUCCESS = 'GET_POKEMON_BY_ID_SUCCESS';
export const getPokemonByIdSuccessAction = createAction(GET_POKEMON_BY_ID_SUCCESS, props<{ pokemonResource: PokemonRessource }>());
export type GetPokemonByIdSuccessAction = ReturnType<typeof getPokemonByIdSuccessAction>;

export const GET_POKEMON_SPECIES_SUCCESS = 'GET_POKEMON_SPECIES_SUCCESS';
export const getPokemonSpeciesSuccessAction = createAction(GET_POKEMON_SPECIES_SUCCESS, props<{ pokemonResource: PokemonRessource }>());
export type GetPokemonSpeciesSuccessAction = ReturnType<typeof getPokemonSpeciesSuccessAction>;

export const GET_POKEMON_SUCCESS = 'GET_POKEMON_SUCCESS';
export const getPokemonSuccessAction = createAction(GET_POKEMON_SUCCESS, props<{ pokemonResource: PokemonRessource }>());
export type GetPokemonSuccessAction = ReturnType<typeof getPokemonSuccessAction>;


