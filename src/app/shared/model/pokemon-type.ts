export enum PokemonType {
    Normal = 'normal',
    Fighting = 'fighting',
    Flying = 'flying',
    Poison = 'poison',
    Ground = 'ground',
    Rock = 'rock',
    Bug = 'bug',
    Ghost = 'ghost',
    Steel = 'steel',
    Fire = 'fire',
    Water = 'water',
    Grass = 'grass',
    Electric = 'electric',
    Psychic = 'psychic',
    Ice = 'ice',
    Dragon = 'dragon',
    Dark = 'dark',
    Fairy = 'fairy',
    Unknown = 'unknown',
    Shadow = 'shadow'
}

const POKEMON_TYPE_COLOR_MAPPING: { [key: string]: string } = {
    [PokemonType.Normal]: '#A8A878',
    [PokemonType.Fighting]: '#C03028',
    [PokemonType.Flying]: '#A890F0',
    [PokemonType.Poison]: '#A040A0',
    [PokemonType.Ground]: '#E0C068',
    [PokemonType.Rock]: '#B8A038',
    [PokemonType.Bug]: '#A8B820',
    [PokemonType.Ghost]: '#705898',
    [PokemonType.Steel]: '#B8B8D0',
    [PokemonType.Fire]: '#F08030',
    [PokemonType.Water]: '#6890F0',
    [PokemonType.Grass]: '#78C850',
    [PokemonType.Electric]: '#F8D030',
    [PokemonType.Psychic]: '#F85888',
    [PokemonType.Ice]: '#98D8D8',
    [PokemonType.Dragon]: '#7038F8',
    [PokemonType.Dark]: '#705848',
    [PokemonType.Fairy]: '#EE99AC',
    [PokemonType.Unknown]: '#68A090',
    [PokemonType.Shadow]: '#958B87',
};

export const getTypeColor = (type: string): string => {
    return POKEMON_TYPE_COLOR_MAPPING[type];
};

