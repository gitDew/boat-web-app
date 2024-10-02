import { Injectable } from '@angular/core';
import { Boat } from './boat-list/models/Boat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class BoatsService {
  constructor(private http: HttpClient) {}
  private apiUrl = environment.backendUrl;

  getBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>(`${this.apiUrl}/boats`);
  }

  deleteBoat(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/boats/${id}`);
  }

  updateBoat(id: number, boat: Boat): Observable<Boat> {
    return this.http.put<Boat>(`${this.apiUrl}/boats/${id}`, boat);
  }
}
