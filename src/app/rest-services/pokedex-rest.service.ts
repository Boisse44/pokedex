import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pokedex } from '../shared/model/api/pokedex';
import { PokemonRessource } from '../shared/model/api/pokemon-ressource';
import { PokemonSpeciesRessource } from '../shared/model/api/pokemon-species-ressource';

@Injectable({ providedIn: 'root' })
export class PokedexRestService {
    public baseUrl = 'https://pokeapi.co/api/v2';

    constructor(private httpClient: HttpClient) { }

    public getPokedexEntries(): Observable<Pokedex> {
        return this.httpClient.get<any>(`${this.baseUrl}/pokedex/1`);
    }

    public getPokemon(id: number): Observable<PokemonRessource> {
        return this.httpClient.get<any>(`${this.baseUrl}/pokemon/${id}`);
    }

    public getPokemonSpecies(speciesUrl: string): Observable<PokemonSpeciesRessource> {
        return this.httpClient.get<any>(`${speciesUrl}`);
    }

    public getPokemonEvolutionChain(evolutionChainUrl: string): Observable<any> {
        return this.httpClient.get<any>(`${evolutionChainUrl}`);
    }
}
