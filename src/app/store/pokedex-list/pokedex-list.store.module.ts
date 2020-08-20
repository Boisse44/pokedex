import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { pokedexListFeatureKey, pokedexListReducer } from './pokedex-list.reducer';

@NgModule({
    imports: [
        StoreModule.forFeature(pokedexListFeatureKey, pokedexListReducer)
    ],
})
export class PokedexListStoreModule { }