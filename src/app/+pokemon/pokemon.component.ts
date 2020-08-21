import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Pokemon } from '../shared/model/pokemon/pokemon';
import { getTypeColor, PokemonType } from '../shared/model/pokemon/pokemon-type';
import { getCurrentPokemon } from '../store/pokemon/pokemon.selector';

@Component({
    selector: 'pokemon',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./pokemon.component.scss'],
    template: `
        <div class="pokemon__container pokemon__section" *ngIf="currentPokemon$ | async as pokemon; else loading">
            <div class="pokemon__info pokemon__section --column">
                <div class="pokemon__title pokemon__section --spaced title-01">
                    <span class="pokemon__title-name">{{ pokemon.name }}</span>
                    <span class="pokemon__title-number">#{{ pokemon.id }}</span>
                </div>
                <div class="pokemon__description --spaced pokemon__section">
                        <img class="pokemon__image" [src]="pokemon.imageUrl">
                    <div class="pokemon__specs">
                        <div class="pokemon__section --column">
                            <span class="pokemon__specs-title title-03">Height</span>
                            <span class="label-01">{{ pokemon.height }}</span>
                        </div>
                        <div class="pokemon__section --column">
                            <span class="pokemon__specs-title title-03">Weight</span>
                            <span class="label-01">{{ pokemon.weight }}</span>
                        </div>
                        <div class="pokemon__section --column">
                            <span class="pokemon__specs-title title-03">Abilities</span>
                            <div class="pokemon__abilities pokemon__section --column">
                                <span class="label-01" *ngFor="let ability of pokemon.abilities">{{ ability.name }}</span>
                            </div>
                        </div>
                        <div class="pokemon__section --column">
                            <span class="pokemon__specs-title title-03">Base Experience</span>
                            <span class="label-01">{{ pokemon.baseExperience }}</span>
                        </div>
                    </div>
                </div>
                <div class="pokemon__section --column --spaced">
                    <span class="title-02">Type</span>
                    <div class="pokemon__section">
                        <span class="pokemon__type-name label-01"
                            *ngFor="let type of pokemon.types"
                            [ngStyle]="getTypeColorStyle(type)">{{ type }}
                        </span>
                    </div>
                </div>
                <div class="pokemon__evolution pokemon__section --column --spaced">
                <span class="title-02">Evolution</span>
                    <div class="pokemon__evolution-item-container pokemon__section">
                        <div class="pokemon__evolution-item pokemon__section --column" *ngFor="let evolution of pokemon.evolutionChain" (click)="navigateToPokemon(evolution.id)">
                            <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/{{evolution.id}}.png">
                            <div class="pokemon__evolution-item-info pokemon__section">
                                <span class="title-05">{{ evolution.name }}</span>
                                <span class="title-05">#{{ evolution.id }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <ng-template #loading>
            <div class="pokemon__loading-container pokemon__section">
                <div class="pokeball-loading-spinner"></div>
            </div>
        </ng-template>
    `,
})
export class PokemonComponent implements OnInit {
    public currentPokemon$: Observable<Pokemon> = this.store.select(getCurrentPokemon);

    constructor(
        private store: Store,
        private router: Router,
    ) { }

    public ngOnInit(): void {
    }

    public navigateToPokemon(id: number): void {
        this.router.navigate(['/pokemon', id]);
    }

    public getTypeColorStyle(type: PokemonType): { [key: string]: string } {
        const color = getTypeColor(type);
        return { 'background-color': color };
    }
}
