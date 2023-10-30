import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PokemonListResponse } from '../models/pokemon-list.interface';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {

  constructor(private http: HttpClient) {}

  getAllPokemon(): Observable<PokemonListResponse>{
    return this.http.get<PokemonListResponse>('https://pokeapi.co/api/v2/pokemon');
  }
}
