import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  pokemons = [];
  constructor(
    private httpClient: HttpClient,
  ) {
    this.carregarPokemons();
   }

  url = 'https://pokeapi.co/api/v2/pokemon?limit=1025&offset=0';

  carregarPokemons(): Observable<any> { 
    return this.httpClient.get<any>(this.url);
  }

}
