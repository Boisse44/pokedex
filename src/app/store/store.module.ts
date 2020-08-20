import { NgModule } from '@angular/core';
import { PokedexListStoreModule } from './pokedex-list/pokedex-list.store.module';
import { PokemonStoreModule } from './pokemon/pokemon.store.module';

@NgModule({
    imports: [
        PokedexListStoreModule,
        PokemonStoreModule,
    ],
})
export class PokedexStoreModule { }
