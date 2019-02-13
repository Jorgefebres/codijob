import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

export interface UserDetails {
  id: any;
  email: any;
  name: any;
  exp: any;
}

interface TokenResponse {
  token: string;
}

export interface TokenPayload {
  email: string;
  password: string;
  name?: string;
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token: string;
  constructor(private _http: HttpClient, private _router: Router) {

  }

  private saveToken(token: string): void {
    localStorage.setItem('mean-token', token);
    this.token = token;
  }

  private getToken(): string {
    if (!this.token) {
      this.token = localStorage.getItem('mean-token');
    }
    return this.token;
  }

  public logout(): void {
    this.token = '';
    window.localStorage.removeItem('mean-token');
    this._router.navigateByUrl('/');
  }

  public getUserDetails(): UserDetails {
    const token = this.getToken();
    let payload;
    if (token) {
      payload = token.split('.')[1];
      payload = window.atob(payload);
      return JSON.parse(payload);
    } else {
      return null;
    }
  }

  public isLoggedIn(): boolean {
    const user = this.getUserDetails();
    if (user) {
      return user.exp > Date.now() / 1000;
    } else {
      return false;
    }
  }

  private request(method: 'post'|'get', type: 'login'|'register'|'profile', user?: TokenPayload): Observable<any> {
    let base;

    if (method === 'post') {
      base = this._http.post(`http://localhost:3700/api/${type}`, user);
    } else {
      base = this._http.get(`http://localhost:3700/api/${type}`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
    }

    const request = base.pipe(
                                map((data: TokenResponse) => {
                                  if (data.token) {
                                    this.saveToken(data.token);
                                  }
                                  return data;
                                })
                              );

    return request;
  }

  public register(user: TokenPayload): Promise<any> {
    
    return new Promise((resolve, reject)=>{
      this._http.post(`http://localhost:3700/api/register`, user).subscribe((data:any)=>{
        console.log(data);
        if (data.token) {
          this.saveToken(data.token);
          console.log("resolve ejecutado");
          resolve();
        }
        console.log("reject ejecutado");
        reject();
      });
    })
  }

  public login(user: TokenPayload): Observable<any> {
    return this.request('post', 'login', user);
  }

  public profile(): Observable<any> {
    return this._http.get(`http://localhost:3700/api/profile`, { headers: { Authorization: `Bearer ${this.getToken()}` }});
  }
}
