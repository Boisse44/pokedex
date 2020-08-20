export interface Pokedex {
    pokemon_entries: PokemonEntry[];
}

export interface PokemonEntry {
    entry_number: number;
    pokemon_species: PokemonSpecies;
}

export interface PokemonSpeciesRessource {
    evolution_chain: EvolutionChainResource;
}

export interface PokemonSpecies {
    name: string;
    url: string;
    evolutionChainUrl: string;
}

export interface EvolutionChainResource {
    url: string;
}
