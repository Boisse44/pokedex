import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    selector: 'pokedex-home-footer',
    changeDetection: ChangeDetectionStrategy.OnPush,
    template: `
        <div class="pokedex-header__container">
           <span>footer</span>
        </div>
    `
})

export class PokedexHomeFooterComponent {
}