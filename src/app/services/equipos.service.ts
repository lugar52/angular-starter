import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode, HttpErrorResponse } from  '@angular/common/http';
import { catchError, lastValueFrom, shareReplay, throwError } from 'rxjs';
import { Equipos } from '../model/equipos'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EquiposService {

  private API_URL: string = "";
  private httpOptions?:  any


  
  constructor(
    private http: HttpClient,
    ) { 

      this.API_URL = environment.apiUrl
      console.log(environment.apiUrl)


    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getEquipos(): Observable<any[]> {
  
    return this.http.get<any[]>(`${this.API_URL}/equipos`)
  }

  getEquiposSel(id: number): Observable<any[]> {
    console.log("Sel: ", id )
    return this.http.get<any[]>(`${this.API_URL}/equiposel/${id}`)
  }

  get_Equipo(id: string) {
    return this.http.get(`${this.API_URL}/equipos/${id}`)
  }

  getEquiposIngresados(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/equipos_ing/ingresos/${id}`)
  }

  inserWay(Mireg: Equipos) {
    console.log(Mireg)
    return this.http.post(`${this.API_URL}/railway`, Mireg)
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}
