import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadPokemonsAction } from './store/pokedex-list/pokedex-list.actions';

@Component({
  selector: 'app-root',
  template: `
      <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store,
  ) {

  }
  public ngOnInit(): void {
    this.store.dispatch(loadPokemonsAction());
  }
}
