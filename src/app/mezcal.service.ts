import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // Usa HttpClient directamente
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MezcalService {
  private jsonUrl = 'assets/data.json';

  constructor(private http: HttpClient) {}

  getMezcales(): Observable<any> {
    return this.http.get<any>(this.jsonUrl);
  }
}
