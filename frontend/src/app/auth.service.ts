import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  public token = '';

  constructor(private http: HttpClient) {}

  login(email: String, password: String): Observable<string> {
    this.logout();
    const credentials = btoa(`${email}:${password}`);

    return this.http
      .post(`${environment.backendUrl}/token`, null, {
        headers: new HttpHeaders({
          Authorization: `Basic ${credentials}`,
          'Content-Type': 'text/plain',
        }),
        responseType: 'text',
      })
      .pipe(tap((token: string) => (this.token = token)));
  }

  logout() {
    this.token = '';
  }

  get isLoggedIn(): boolean {
    return this.token !== '';
  }
}
