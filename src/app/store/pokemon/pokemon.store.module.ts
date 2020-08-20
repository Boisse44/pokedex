import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { currentPokemonFeatureKey, pokemonReducer } from './pokemon.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(currentPokemonFeatureKey, pokemonReducer)
    ],
})
export class PokemonStoreModule { }
