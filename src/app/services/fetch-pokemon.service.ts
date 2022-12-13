import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FetchPokemonService {
  constructor(private _http: HttpClient) {}

  getPokemon(id: number = 1) {
    return this._http.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
  }
}
