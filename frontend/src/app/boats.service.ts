import { Injectable } from '@angular/core';
import { Boat } from './boat-list/models/Boat';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BoatsService {
  constructor(private http: HttpClient) {}

  getBoats(): Observable<Boat[]> {
    return this.http.get<Boat[]>('http://localhost:8080/boats');
  }
}
