import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Store } from '@ngrx/store';
import { Pokemon } from '../shared/model/pokemon';
import { getPokemonByIdAction } from '../store/pokemon/pokemon.actions';

@Injectable()
export class PokemonRoutesResolvers implements Resolve<any> {

    constructor(
        private store: Store
    ) {
    }

    public resolve(route: ActivatedRouteSnapshot): Promise<Pokemon> {
        const id = route.params.pokemonId;

        return new Promise((resolve, reject) => {
            this.store.dispatch(getPokemonByIdAction({ id }));
            resolve({ id } as Pokemon);
        });
    }
}
