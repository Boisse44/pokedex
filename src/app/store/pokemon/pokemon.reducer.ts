import { createReducer, on } from '@ngrx/store';
import { PokemonRessource } from '../../shared/model/api/pokemon-ressource';
import { EvolutionChain } from '../../shared/model/pokemon/evolution-chain';
import { Pokemon } from '../../shared/model/pokemon/pokemon';
import { PokemonAbility } from '../../shared/model/pokemon/pokemon-ability';
import { PokemonType } from '../../shared/model/pokemon/pokemon-type';
import { getPokemonByIdAction, getPokemonSuccessAction } from './pokemon.actions';

export interface CurrentPokemonState {
    readonly currentPokemon: Pokemon;
}

export const initialState: CurrentPokemonState = {
    currentPokemon: null,
};

export const currentPokemonFeatureKey = 'currentPokemon';

const _pokemonReducer = createReducer(initialState,
    on(getPokemonByIdAction, (state) => ({ ...state, currentPokemon: null })),
    on(getPokemonSuccessAction, (state, { pokemonResource }) => ({ ...state, currentPokemon: convertPokemon(pokemonResource) }))
);

export function pokemonReducer(state, action) {
    return _pokemonReducer(state, action);
}

export function convertPokemon(pokemonResource: PokemonRessource): Pokemon {
    return {
        id: pokemonResource.id,
        name: pokemonResource.name,
        height: pokemonResource.height,
        weight: pokemonResource.weight,
        baseExperience: pokemonResource.base_experience,
        abilities: convertAbilities(pokemonResource),
        imageUrl: pokemonResource.sprites.front_default,
        types: convertTypes(pokemonResource),
        evolutionChain: convertEvolutionChain(pokemonResource),
        species: pokemonResource.species
    };

}

export function convertEvolutionChain(pokemonResource: PokemonRessource): EvolutionChain[] {
    let evolutionChain: EvolutionChain[] = [];
    let evoData = pokemonResource.evolutionChain.chain;

    do {
        evolutionChain.push({
            id: !evoData ? null : evoData.species.url.split('/')[6],
            name: evoData.species.name,
        });

        evoData = evoData.evolves_to[0];
    } while (!!evoData && evoData.hasOwnProperty('evolves_to'));
    return evolutionChain;
}

export function convertTypes(pokemonResource: PokemonRessource): PokemonType[] {
    return pokemonResource.types.map(type => type.type.name);
}

export function convertAbilities(pokemonResource: PokemonRessource): PokemonAbility[] {
    return pokemonResource.abilities.map(ability => ({ name: ability.ability.name }));
}
