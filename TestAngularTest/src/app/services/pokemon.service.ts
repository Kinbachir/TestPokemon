import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Pokemon } from '../models/pokemon.model';

const baseUrl = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(baseUrl);
  }

  getByName(name: any): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${baseUrl}/${name}`);
  }
  getByWeaknesses(weaknesses: any): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${baseUrl}/weak/${weaknesses}`);
  }
  getByStrong(weaknesses: any): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`${baseUrl}/strong/${weaknesses}`);
  }
  battle(data: any): Observable<any> {
    return this.http.post(baseUrl+"/figth", data);
  }
}