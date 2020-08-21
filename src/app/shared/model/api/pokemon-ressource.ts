import { PokemonSpecies } from '../pokemon/pokemon-species';

export interface PokemonRessource {
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
