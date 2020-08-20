import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';
import { PokedexRestService } from '../rest-services/pokedex-rest.service';
import { LOAD_POKEMONS, LOAD_POKEMONS_SUCCESS } from '../store/pokedex-list/pokedex-list.actions';

@Injectable()
export class LoadPokemonsEffects {

    @Effect() loadPokemons$ = this.actions$.pipe(
        ofType(LOAD_POKEMONS),
        mergeMap(() => this.pokedexListRestService.getPokedexEntries()
            .pipe(
                map(pokedex => ({ type: LOAD_POKEMONS_SUCCESS, pokemons: pokedex.pokemon_entries })),
                catchError(() => EMPTY)
            )
        )
    );

    constructor(
        private actions$: Actions,
        private pokedexListRestService: PokedexRestService
    ) { }
}
