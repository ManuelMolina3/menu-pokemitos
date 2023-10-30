import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BerriesListResponse } from '../models/berries-list.interface';

@Injectable({
  providedIn: 'root'
})
export class BerriesListService {

  constructor(private http: HttpClient) { }

  getAllberries() :Observable<BerriesListResponse>{
    return this.http.get<BerriesListResponse>('https://pokeapi.co/api/v2/berry');
  }
}
