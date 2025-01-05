import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode, HttpErrorResponse } from  '@angular/common/http';
import { catchError, lastValueFrom, shareReplay, throwError } from 'rxjs';
import { Perneria } from '../model/perneria'
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PerneriaService {

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

  getPerneria(): Observable<any[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log("service: ", `${this.API_URL}${seleccion}`)
    return this.http.get<any[]>(`${this.API_URL}${seleccion}`)
  }

  getPerneriaSel(id: number): Observable<any[]> {
    console.log("Sel: ", id )
    return this.http.get<any[]>(`${this.API_URL}/perneria/${id}`)
  }

  get_Perno(id: string) {
    return this.http.get(`${this.API_URL}/Perneria/${id}`)
  }

  getPerneriaIngresados(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/Perneria_ing/ingresos/${id}`)
  }

  inserWay(Mireg: Perneria) {
    console.log(Mireg)
    return this.http.post(`${this.API_URL}/railway`, Mireg)
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

}
