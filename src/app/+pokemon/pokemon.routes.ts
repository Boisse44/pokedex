import { Route } from '@angular/router';
import { PokemonComponent } from './pokemon.component';
import { PokemonRoutesResolvers } from './pokemon.routes.resolvers';


export const routes: Route[] = [{
    path: ':pokemonId',
    component: PokemonComponent,
    resolve: {
        currentPokemon: PokemonRoutesResolvers,
    }

}];
