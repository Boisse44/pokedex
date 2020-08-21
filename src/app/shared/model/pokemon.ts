import { EvolutionChain } from './evolution-chain';
import { PokemonSpecies } from './pokedex';
import { PokemonAbility } from './pokemon-ability';
import { PokemonType } from './pokemon-type';

export interface Pokemon {
    id: number;
    name: string;
    height: number;
    weight: number;
    baseExperience: number;
    abilities: PokemonAbility[];
    imageUrl: string;
    types: PokemonType[];
    evolutionChain: EvolutionChain[];
    species: PokemonSpecies;
}

export interface PokemonResource {
    id: number;
    name: string;
    height: number;
    weight: number;
    sprites: PokemonSprites;
    types: any[];
    abilities: any[];
    species: PokemonSpecies;
    evolutionChain: any;
    base_experience: number;
}

export interface PokemonSprites {
    front_default: string;
}
