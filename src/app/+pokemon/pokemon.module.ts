import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PokemonComponent } from '../+pokemon/pokemon.component';
import { routes } from './pokemon.routes';
import { PokemonRoutesResolvers } from './pokemon.routes.resolvers';


@NgModule({
    declarations: [
        PokemonComponent,
    ],
    imports: [
        CommonModule,
        FormsModule,
        RouterModule.forChild(routes),
    ],
    providers: [
        PokemonRoutesResolvers
    ]
})
export class PokemonModule {
}
