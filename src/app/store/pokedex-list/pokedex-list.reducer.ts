import { createReducer, on } from '@ngrx/store';
import { PokemonEntry } from 'src/app/shared/model/api/pokedex';
import { PokemonListItem } from 'src/app/shared/model/pokedex-list/pokemon-list-item';
import { loadPokemonsSuccessAction } from './pokedex-list.actions';

export interface PokedexListState {
    readonly pokemonListItems: PokemonListItem[];
}

export const initialState: PokedexListState = {
    pokemonListItems: [],
};

export const pokedexListFeatureKey = 'pokedexList';

const _pokedexListReducer = createReducer(initialState,
    on(loadPokemonsSuccessAction, (state, { pokemons }) => ({ ...state, pokemonListItems: convertPokemon(pokemons) }))
);

export function pokedexListReducer(state, action) {
    return _pokedexListReducer(state, action);
}

export function convertPokemon(pokemonEntries: PokemonEntry[]): PokemonListItem[] {
    return pokemonEntries.map(pokemonEntry => (
        { id: pokemonEntry.entry_number, name: pokemonEntry.pokemon_species.name, url: pokemonEntry.pokemon_species.url })
    );
}
