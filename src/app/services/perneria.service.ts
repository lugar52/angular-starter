import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode, HttpErrorResponse } from  '@angular/common/http';
import { catchError, lastValueFrom, shareReplay, throwError } from 'rxjs';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perneria } from '../model/perneria'
import { DatosAGrabar } from '../model/inPernos'

@Injectable({
  providedIn: 'root'
})
export class PerneriaService {

  private API_URL: string = "";
  private httpOptions?:  any

  constructor(
    private http: HttpClient,
    ) {

      //this.API_URL = 'https://myfastapi-production.up.railway.app'

      this.API_URL = 'http://127.0.0.1:8000'
      console.log(this.API_URL)


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

  // ---------------------------------------------------- new List ---------------------
  getPernos(): Observable<Perneria[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log('getPernos: ', `${this.API_URL}${seleccion}`)
    return this.http.get<Perneria[]>(`${this.API_URL}${seleccion}`)
    //.pipe<Perneria[]>(map((data: any) => data.pernos));
  }

  updatePerno(id: number, perno: DatosAGrabar): Observable<any> {
    return this.http.put<DatosAGrabar>(`${this.API_URL}/api/perneria/update_perno/${id}`, perno);
  }

  addPerno(perneria: Perneria): Observable<Perneria> {
    return this.http.post<Perneria>(`${this.API_URL}/add`, perneria);
  }

  deleteUser(id: number): Observable<Perneria> {
    return this.http.delete<Perneria>(`${this.API_URL}/${id}`);
  }

  deleteUsers(perneria: Perneria[]): Observable<Perneria[]> {
    return forkJoin(
      perneria.map((perneria) =>
        this.http.delete<Perneria>(`${this.API_URL}/${perneria.ID_PERNO}`)
      )
    );
  }

}
