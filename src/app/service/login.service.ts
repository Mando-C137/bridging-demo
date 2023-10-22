import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, delay, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  logout() {
    return of({ success: true });
  }
  login({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Observable<{ success: boolean; error: string | null }> {
    if (username === 'Ash' && password === 'pikachu') {
      return of({ success: true, error: null }).pipe(delay(1000));
    } else if (password === 'password') {
      return of({ success: true, error: null }).pipe(delay(1000));
    }
    return of({
      success: false,
      error: 'Wrong Credentials',
    }).pipe(delay(1000));
  }
}
