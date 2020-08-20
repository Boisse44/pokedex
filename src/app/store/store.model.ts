import { PokedexListState } from './pokedex-list/pokedex-list.reducer';
import { CurrentPokemonState } from './pokemon/pokemon.reducer';

export interface PokedexState {
    pokedexList: PokedexListState;
    currentPokemon: CurrentPokemonState;
}