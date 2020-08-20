import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokedexHomeComponent } from './home/pokedex-home.component';
import { PokedexListComponent } from './home/pokedex-list.component';

export const ROUTES: Routes = [
    {
        path: '', component: PokedexHomeComponent, children: [
            { path: '', component: PokedexListComponent },
            { path: 'pokemon', loadChildren: () => import('./+pokemon/pokemon.module').then(m => m.PokemonModule) }
        ]
    },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
