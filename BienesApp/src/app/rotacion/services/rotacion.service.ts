import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Rotacion } from '../interfaces/rotacion';

@Injectable({
  providedIn: 'root'
})
export class RotacionService {

  private baseUrl: String = environment.baseUrl;
  private _rotacion!: Rotacion;

  constructor(private http: HttpClient) { }

  get rotacion(){
    return {...this._rotacion}
  }
}
