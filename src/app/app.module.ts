import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { GetPokemonEffects } from 'src/app/effects/get-pokemon.effects';
import { LoadPokemonsEffects } from 'src/app/effects/load-pokemons.effects';
import { PokedexStoreModule } from 'src/app/store/store.module';
import { environment } from 'src/environments/environment';
import { PokemonRoutesResolvers } from './+pokemon/pokemon.routes.resolvers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PokedexHomeModule } from './home/pokedex-home.module';



@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    PokedexHomeModule,
    PokedexStoreModule,
    StoreModule.forRoot({}),
    EffectsModule.forRoot([LoadPokemonsEffects, GetPokemonEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    BrowserAnimationsModule,
  ],
  providers: [PokemonRoutesResolvers],
  bootstrap: [AppComponent]
})
export class AppModule { }
