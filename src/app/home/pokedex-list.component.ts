import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { MatPaginatorIntl, PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';
import { PokemonListItem } from '../shared/model/pokemon-list-item';
import { CustomMatPaginator } from '../shared/services/custom-mat-paginator-intl.service';
import { getPokemonListItems } from '../store/pokedex-list/pokedex-list.selector';

@Component({
    selector: 'pokedex-list',
    styleUrls: ['./pokedex-list.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    providers: [{ provide: MatPaginatorIntl, useValue: CustomMatPaginator() }],
    template: `
        <div class="pokedex-list__container">
            <div class="pokedex-list__items-container">
                <div class="pokedex-list__item" *ngFor="let pokemon of displayedItems" (click)="navigateToPokemon(pokemon)">
                    <img class="pokedex-list__item-image" src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{pokemon.id}}.png">
                    <div class="pokedex-list__item-detail">
                        <span class="label-01">#{{ pokemon.id }}</span>
                        <span class="pokedex-list__item-name title-03">{{ pokemon.name }}</span>
                    </div>
                </div>
            </div>
            <mat-paginator [length]="pokemonListItems.length"
                   [pageSize]="itemsPerPage"
                   (page)="pageEvent = test($event)">
            </mat-paginator>
        </div>
    `
})

export class PokedexListComponent implements OnInit, OnDestroy {
    public readonly itemsPerPage: number = 27;

    public pokemonListItems: PokemonListItem[] = [];
    public displayedItems: PokemonListItem[] = [];
    public pageEvent: PageEvent;

    private subscriptions: Subscription[] = [];

    constructor(
        private store: Store,
        private router: Router,
        private changeDetectorRef: ChangeDetectorRef
    ) { }

    public ngOnInit(): void {
        this.subscriptions.push(this.store.select(getPokemonListItems).subscribe(items => {
            this.pokemonListItems = items;
            this.getPokemonListItems(0, this.itemsPerPage);
            this.changeDetectorRef.markForCheck();
        }));
    }
    public ngOnDestroy(): void {
        this.subscriptions.forEach(subscription => subscription.unsubscribe());
    }

    public test(event: PageEvent): PageEvent {
        const end = (event.pageIndex + 1) * event.pageSize;
        const start = event.pageIndex * event.pageSize;
        this.getPokemonListItems(start, end);
        return event;
    }

    public getPokemonListItems(start: number, end: number): void {
        this.displayedItems = this.pokemonListItems.slice(start, end);
    }

    public navigateToPokemon(pokemonListItem: PokemonListItem): void {
        this.router.navigate(['/pokemon', pokemonListItem.id]);
    }
}
