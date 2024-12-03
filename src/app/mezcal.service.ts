import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Mezcal {
  id: number;
  name: string;
  description: string;
  flavor: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class MezcalService {
  private apiUrl = 'http://localhost:3000/mezcales'; // URL del backend

  constructor(private http: HttpClient) { }

  getMezcales(): Observable<Mezcal[]> {
    return this.http.get<Mezcal[]>(this.apiUrl);
  }
}
