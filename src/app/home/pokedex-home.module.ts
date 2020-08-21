import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { PokedexHomeFooterComponent } from './pokedex-home-footer.component';
import { PokedexHomeHeaderComponent } from './pokedex-home-header.component';
import { PokedexHomeComponent } from './pokedex-home.component';
import { PokedexListComponent } from './pokedex-list/pokedex-list.component';

const ROUTES = [
    { path: '', component: PokedexListComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [
        CommonModule,
        MatPaginatorModule,
        RouterModule.forChild(ROUTES),
    ],
    exports: [
        PokedexHomeComponent
    ],
    declarations: [
        PokedexHomeComponent,
        PokedexHomeHeaderComponent,
        PokedexHomeFooterComponent,
        PokedexListComponent
    ],
    providers: [],
})
export class PokedexHomeModule { }
