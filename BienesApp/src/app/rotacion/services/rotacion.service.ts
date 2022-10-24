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

  constructor(private http: HttpClient) { }

  getRotacion(): Observable<Rotacion[]>{
    return this.http.get<Rotacion[]>(`${this.baseUrl}/rotacion`);
  }
}
