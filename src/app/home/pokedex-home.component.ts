import { ChangeDetectionStrategy, Component } from '@angular/core';

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

export class PokedexHomeComponent {
}
