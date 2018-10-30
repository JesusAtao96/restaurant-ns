import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { SecureStorage } from "nativescript-secure-storage";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { AppGlobals } from '../../../global';

const TOKEN_KEY = 'auth-token';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user: any;
  storage = new SecureStorage();
  authenticationState = new BehaviorSubject(null);
  headers;

  constructor(private global: AppGlobals, private http: HttpClient) {
    this.checkToken();
  }

  setToken(data) {
    console.log('setToken', data.token)
    return this.storage.set({ key: TOKEN_KEY, value: data.token }).then(() => {
      const { name, email, img } = data.user;
      console.log(JSON.stringify({ name, email, img }));

      this.storage.setSync({ key: "user", value: JSON.stringify({ name, email, img }) });
      this.user = { name, email, img };

      this.headers = { headers: new HttpHeaders().set('token', data.token) };
      this.authenticationState.next(true);
    });
  }

  login(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/normal`, data);
  }

  register(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/users`, data);
  }

  facebook(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/facebook`, data);
  }

  google(data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/login/google`, data);
  }

  updateUser(id, data): Observable<any> {
    return this.http.post(`${this.global.baseAppUrl}/user/${id}`, data);
  }

  logout() {
    return this.storage.removeAll().then(() => {
      this.user = undefined;
      this.authenticationState.next(false);
    });
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

  checkToken() {
    this.storage.get({ key: TOKEN_KEY }).then(token => {
      if(token) {
        this.headers = { headers: new HttpHeaders().set('token', token) };
        this.getUserData();
        this.authenticationState.next(true);
      } else {
        this.authenticationState.next(false);
      }
    });
  }

  async getToken() {
    return await this.storage.get({ key: TOKEN_KEY });
  }

  getUserData() {
    this.storage.get({ key: "user" }).then(user => {
      console.log('getUserData', user);
      this.user = JSON.parse(user);
    });
  }

}
