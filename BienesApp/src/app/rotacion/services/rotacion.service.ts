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

  getRegistroPorID(_id: string): Observable<Rotacion>{
    return this.http.get<Rotacion>(`${this.baseUrl}/rotacion/${_id}`);
  }

  getSugerencias(termino: string): Observable<Rotacion[]>{
    return this.http.get<Rotacion[]>(`${this.baseUrl}/rotacion?q=${termino}&_limit=6`);
  }

  agregarRotacion( rotacion: Rotacion ): Observable<Rotacion> {
    return this.http.post<Rotacion>(`${ this.baseUrl}/rotacion/agregar`, rotacion );
  }

  actualizarRegistro(_id: string, rotacion: Rotacion ): Observable<any> {
    return this.http.put<any>(`${ this.baseUrl}/rotacion/editar/${rotacion._id}`, rotacion);
  }

  deleteRegistro(_id: string): Observable<any>{
    return this.http.delete<any>(`${this.baseUrl}/rotacion/${_id}`);
  }



}
