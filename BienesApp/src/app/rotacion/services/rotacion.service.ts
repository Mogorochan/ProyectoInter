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

  getLrotacion(): Observable<Rotacion[]>{
    return this.http.get<Rotacion[]>(`${this.baseUrl}/rotacion`);
  }

  getRegistroPorID(id: string): Observable<Rotacion>{
    return this.http.get<Rotacion>(`${this.baseUrl}/rotacion/${id}`);
  }

  getSugerencias(termino: string): Observable<Rotacion[]>{
    return this.http.get<Rotacion[]>(`${this.baseUrl}/rotacion?q=${termino}&_limit=6`);
  }

  agregarRotacion( rotacion: Rotacion ): Observable<Rotacion> {
    return this.http.post<Rotacion>(`${ this.baseUrl}/rotacion`, rotacion );
  }

  actualizarRegistro(rotacion: Rotacion ): Observable<Rotacion> {
    return this.http.post<Rotacion>(`${ this.baseUrl}/rotacion/${rotacion.id}`, rotacion);
  }

  deleteRegistro(id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/rotacion/${id}`);
  }



}
