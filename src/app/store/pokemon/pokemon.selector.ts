import { createSelector } from '@ngrx/store';
import { PokedexState } from '../store.model';
import { CurrentPokemonState } from './pokemon.reducer';

export const selectFeature = (state: PokedexState) => state.currentPokemon;

export const getCurrentPokemon = createSelector(
    selectFeature,
    (state: CurrentPokemonState) => state.currentPokemon
);
