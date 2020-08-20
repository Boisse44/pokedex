import { PokemonSpecies } from './pokedex';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
    id: number;
    name: string;
    imageUrl: string;
    type: PokemonType;
    evolutionChain: any;
    species: PokemonSpecies;
}

export interface PokemonResource {
    id: number;
    name: string;
    sprites: PokemonSprites;
    type: PokemonType;
    species: PokemonSpecies;
}

export interface PokemonSprites {
    front_default: string;
}
