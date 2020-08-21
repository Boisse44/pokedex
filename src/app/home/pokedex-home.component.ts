import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { select, Store } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { PokemonListItem } from '../shared/model/pokedex-list/pokemon-list-item';
import { getPokemonListItems } from '../store/pokedex-list/pokedex-list.selector';

@Component({
    selector: 'pokedex-home',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./pokedex-home.component.scss'],
    template: `
        <div class="pokedex-home__container">
            <pokedex-home-header></pokedex-home-header>
            <router-outlet></router-outlet>
        </div>
    `
})

export class PokedexHomeComponent implements OnInit {
    public readonly itemsPerPage: number = 20;

    public pokemonListItems$: Observable<PokemonListItem[]> = of([]);
    public pageEvent: PageEvent;
    constructor(
        private store: Store
    ) { }

    public ngOnInit(): void {
        this.getPokemonListItems(0, this.itemsPerPage);
    }

    public test(event: PageEvent): PageEvent {
        const end = (event.pageIndex + 1) * event.pageSize;
        const start = event.pageIndex * event.pageSize;
        this.pokemonListItems$ = this.store.pipe(select(getPokemonListItems, { start, end }));
        return event;
    }

    public getPokemonListItems(start: number, end: number): void {
        this.pokemonListItems$ = this.store.pipe(select(getPokemonListItems, { start, end }));
    }
}
