import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PokedexRestService } from '../rest-services/pokedex-rest.service';
import {
    GetPokemonByIdAction,
    GetPokemonByIdSuccessAction,
    GetPokemonSpeciesSuccessAction,
    GET_POKEMON_BY_ID,
    GET_POKEMON_BY_ID_SUCCESS,
    GET_POKEMON_SPECIES_SUCCESS,
    GET_POKEMON_SUCCESS
} from '../store/pokemon/pokemon.actions';

@Injectable()
export class GetPokemonEffects {

    @Effect() getPokemon$ = this.actions$.pipe(
        ofType<GetPokemonByIdAction>(GET_POKEMON_BY_ID),
        mergeMap(action => this.pokedexListRestService.getPokemon(action.id)
            .pipe(
                map(pokemonResource => ({ type: GET_POKEMON_BY_ID_SUCCESS, pokemonResource })),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect() getPokemonSepcies$ = this.actions$.pipe(
        ofType<GetPokemonByIdSuccessAction>(GET_POKEMON_BY_ID_SUCCESS),
        mergeMap(action => this.pokedexListRestService.getPokemonSpecies(action.pokemonResource.species.url)
            .pipe(
                map(pokemonSpecies => ({
                    type: GET_POKEMON_SPECIES_SUCCESS,
                    pokemonResource: {
                        ...action.pokemonResource, species: {
                            ...action.pokemonResource.species, evolutionChainUrl: pokemonSpecies.evolution_chain.url
                        }
                    }
                })),
                catchError(() => EMPTY)
            )
        )
    );

    @Effect() getPokemonEvolutionChain$ = this.actions$.pipe(
        ofType<GetPokemonSpeciesSuccessAction>(GET_POKEMON_SPECIES_SUCCESS),
        mergeMap(action => this.pokedexListRestService.getPokemonEvolutionChain(action.pokemonResource.species.evolutionChainUrl)
            .pipe(
                map(evolutionChain => ({
                    type: GET_POKEMON_SUCCESS,
                    pokemonResource: {
                        ...action.pokemonResource, evolutionChain
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
