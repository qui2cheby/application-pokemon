import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getPokemones(): Observable<string> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon`).pipe(
      map(
        response =>
          response
      )
    );
  }

  getImagePokemon(url: string): Observable<string> {
    return this.http.get<any>(url).pipe(
      map(
        response =>
          response
      )
    );
  }

  getPokemonByName(name: string): Observable<string> {
    return this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${name}`).pipe(
      map(
        response =>
          response
      )
    );
  }

}
