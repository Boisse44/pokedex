import { createSelector } from '@ngrx/store';
import { PokedexState } from '../store.model';
import { PokedexListState } from './pokedex-list.reducer';

export const selectFeature = (state: PokedexState) => state.pokedexList;

export const getPokemonListItems = createSelector(
    selectFeature,
    (state: PokedexListState) => state.pokemonListItems
);
