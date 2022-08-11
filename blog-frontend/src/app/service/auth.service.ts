import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from 'ngx-webstorage';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { JwtAutResponse } from '../models/jwt-auth-response';
import { Login } from '../models/login';
import { Register } from '../models/register';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private url = 'http://localhost:12120/api/auth/';

  constructor(
    private httpClient: HttpClient,
    private localStorageService: LocalStorageService
  ) {}

  register(register: Register): Observable<any> {
    return this.httpClient.post(this.url + 'sign-up', register);
  }

  login(login: Login): Observable<boolean> {
    return this.httpClient
      .post<JwtAutResponse>(this.url + 'sign-in', login)
      .pipe(
        map((data) => {
          this.localStorageService.store(
            'authenticationToken',
            data.authenticationToken
          );
          this.localStorageService.store('username', data.username);
          return true;
        })
      );
  }
  isAuthenticated(): boolean {
    return this.localStorageService.retrieve('username') != null;
  }
  logout() {
    this.localStorageService.clear('authenticationToken');
    this.localStorageService.clear('username');
  }
}
