import { EvolutionChain } from './evolution-chain';
import { PokemonAbility } from './pokemon-ability';
import { PokemonSpecies } from './pokemon-species';
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
