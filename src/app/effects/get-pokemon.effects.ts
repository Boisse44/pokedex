import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PokedexRestService } from '../rest-services/pokedex-rest.service';
import { GetPokemonByIdAction, GetPokemonByIdSuccessAction, GetPokemonSpeciesSuccessAction, GET_POKEMON_BY_ID, GET_POKEMON_BY_ID_SUCCESS, GET_POKEMON_SPECIES_SUCCESS, GET_POKEMON_SUCCESS } from '../store/pokemon/pokemon.actions';

@Injectable()
export class GetPokemonEffects {

    @Effect() getPokemon$ = this.actions$.pipe(
        ofType<GetPokemonByIdAction>(GET_POKEMON_BY_ID),
        mergeMap(action => this.pokedexListRestService.getPokemon(action.id)
            .pipe(
                map(pokemon => ({ type: GET_POKEMON_BY_ID_SUCCESS, pokemon })),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect() getPokemonSepcies$ = this.actions$.pipe(
        ofType<GetPokemonByIdSuccessAction>(GET_POKEMON_BY_ID_SUCCESS),
        mergeMap(action => this.pokedexListRestService.getPokemonSpecies(action.pokemon.species.url)
            .pipe(
                map(pokemonSpecies => ({
                    type: GET_POKEMON_SPECIES_SUCCESS,
                    pokemon: {
                        ...action.pokemon, species: {
                            ...action.pokemon.species, evolutionChainUrl: pokemonSpecies.evolution_chain.url
                        }
                    }
                })),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect() getPokemonEvolutionChain$ = this.actions$.pipe(
        ofType<GetPokemonSpeciesSuccessAction>(GET_POKEMON_SPECIES_SUCCESS),
        mergeMap(action => this.pokedexListRestService.getPokemonEvolutionChain(action.pokemon.species.evolutionChainUrl)
            .pipe(
                map(evolutionChain => ({
                    type: GET_POKEMON_SUCCESS,
                    pokemon: {
                        ...action.pokemon, evolutionChain
                    }
                })),
                catchError(() => EMPTY)
            )
        )
    );

    constructor(
        private actions$: Actions,
        private pokedexListRestService: PokedexRestService
    ) { }
}
