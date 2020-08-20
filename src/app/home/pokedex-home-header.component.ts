import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'pokedex-home-header',
    styleUrls: ['./pokedex-home-header.component.scss'],
    template: `
        <div class="pokedex-header__container">
            <img class="pokedex-header__logo" src="assets/img/Pokedex.png" (click)="navigateHome()">
        </div>
    `
})

export class PokedexHomeHeaderComponent {
    constructor(
        private router: Router
    ) { }
    public navigateHome(): void {
        this.router.navigate(['/']);
    }
}
