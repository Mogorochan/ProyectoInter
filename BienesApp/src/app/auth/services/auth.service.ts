import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable,of } from 'rxjs';
import {catchError, map, tap } from 'rxjs/operators';

import { environment } from '../../../environments/environment';
import { Auth, AuthResponse } from '../interfaces/auth.interfaces';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _auth!: Auth 

  get auth(){
    return {...this._auth}
  }

  constructor(private http: HttpClient) {}


  login(email: string, password: string){

    const url = `${this.baseUrl}/auth`;
    const body = {email, password};

    return this.http.post<AuthResponse>(url, body)
    .pipe(
      tap(resp =>{
        if (resp.ok) {
          this._auth = {
            name: resp.name!,
            uid: resp.uid!,
            email: resp.email!
          }
        }
      }),
      map(resp => resp.ok),
      catchError(err => of(false) )
    );
  }
}
