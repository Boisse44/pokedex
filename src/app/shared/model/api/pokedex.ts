import { PokemonSpecies } from '../pokemon/pokemon-species';

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonSpecies;
}

export interface Pokedex {
    pokemon_entries: PokemonEntry[];
}
