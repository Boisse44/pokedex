import { createReducer, on } from '@ngrx/store';
import { Pokemon } from '../../shared/model/pokemon';
import { getPokemonByIdAction, getPokemonSuccessAction } from './pokemon.actions';

export interface CurrentPokemonState {
    currentPokemon: Pokemon;
}

export const initialState: CurrentPokemonState = {
    currentPokemon: null,
};

export const currentPokemonFeatureKey = 'currentPokemon';

const _pokemonReducer = createReducer(initialState,
    on(getPokemonByIdAction, (state) => ({ ...state, currentPokemon: null })),
    on(getPokemonSuccessAction, (state, { pokemon }) => ({ ...state, currentPokemon: test(pokemon) }))
);

export function pokemonReducer(state, action) {
    return _pokemonReducer(state, action);
}

export function test(pokemon: Pokemon): Pokemon {
    let evoChain = [];
    let evoData = pokemon.evolutionChain.chain;

    do {
        const evoDetails = evoData['evolution_details'][0];

        evoChain.push({
            "id": !evoData ? null : evoData.species.url.split('/')[6],
            "species_name": evoData.species.name,
            "min_level": !evoDetails ? 1 : evoDetails.min_level,
            "trigger_name": !evoDetails ? null : evoDetails.trigger.name,
            "item": !evoDetails ? null : evoDetails.item,
            "species": !evoData ? null : evoData.species
        });

        evoData = evoData.evolves_to[0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    return { ...pokemon, evolutionChain: evoChain };
}
