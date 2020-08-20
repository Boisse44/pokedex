import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex, PokemonSpeciesRessource } from '../shared/model/pokedex';
import { PokemonResource } from '../shared/model/pokemon';

@Injectable({ providedIn: 'root' })
export class PokedexRestService {
    public baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private httpClient: HttpClient) { }

    public getPokedexEntries(): Observable<Pokedex> {
        return this.httpClient.get<any>(`${this.baseUrl}/pokedex/1`);
    }

    public getPokemon(id: number): Observable<PokemonResource> {
        return this.httpClient.get<any>(`${this.baseUrl}/pokemon/${id}`);
    }

    public getPokemonSpecies(speciesUrl: string): Observable<PokemonSpeciesRessource> {
        return this.httpClient.get<any>(`${speciesUrl}`);
    }

    public getPokemonEvolutionChain(evolutionChainUrl: string): Observable<any> {
        return this.httpClient.get<any>(`${evolutionChainUrl}`);
    }
}
