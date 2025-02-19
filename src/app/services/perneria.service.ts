import { inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode, HttpErrorResponse } from  '@angular/common/http';
import { catchError, lastValueFrom, shareReplay, throwError } from 'rxjs';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Perneria, DatosAGrabar, RegMovimientoStock } from '../model/perneria'
import { appsettings } from '../components/setting/appsetting';

@Injectable({
  providedIn: 'root'
})
export class PerneriaService {

  private http = inject(HttpClient);
  private httpOptions?:  any

  private baseUrl: string = appsettings.apiUrl

  constructor() {

    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getPerneria(): Observable<any[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log("service: ", `${this.baseUrl}${seleccion}`)
    return this.http.get<any[]>(`${this.baseUrl}${seleccion}`)
  }

  getRegXProveedor(id: number): Observable<any[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log("service: ", `${this.baseUrl}${seleccion}`)
    return this.http.get<any[]>(`${this.baseUrl}/perneria/proveedor/${id}`)
  }


  getPerneriaSel(id: number): Observable<any[]> {
    console.log("Sel: ", id )
    return this.http.get<any[]>(`${this.baseUrl}/perneria/get_item/${id}`)
  }

  get_Perno(id: string) {
    return this.http.get(`${this.baseUrl}/Perneria/${id}`)
  }

  getPerneriaIngresados(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Perneria_ing/ingresos/${id}`)
  }

  inserWay(Mireg: Perneria) {
    console.log(Mireg)
    return this.http.post(`${this.baseUrl}/railway`, Mireg)
  }



  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  // ---------------------------------------------------- new List ---------------------
  getPernos(): Observable<Perneria[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log('getPernos: ', `${this.baseUrl}${seleccion}`)
    return this.http.get<Perneria[]>(`${this.baseUrl}${seleccion}`)
    //.pipe<Perneria[]>(map((data: any) => data.pernos));
  }

  updatePerno(id: number, perno: DatosAGrabar): Observable<any> {
    console.log("servicio: ", perno)
    return this.http.put<DatosAGrabar>(`${this.baseUrl}/perneria/update_perno/${id}`, perno);
  }

  addPerno(perneria: Perneria): Observable<Perneria> {
    return this.http.post<Perneria>(`${this.baseUrl}/add`, perneria);
  }

  deleteUser(id: number): Observable<Perneria> {
    return this.http.delete<Perneria>(`${this.baseUrl}/${id}`);
  }

  deleteUsers(perneria: Perneria[]): Observable<Perneria[]> {
    return forkJoin(
      perneria.map((perneria) =>
        this.http.delete<Perneria>(`${this.baseUrl}/${perneria.ID_PERNO}`)
      )
    );
  }

  despacho(Mireg: RegMovimientoStock): Observable<any> {
    console.log(Mireg)
    return this.http.post(`${this.baseUrl}/movimientos/despacho`, Mireg)
  }

  Ingresos(MiregIngreso: RegMovimientoStock): Observable<any> {
    console.log("servicio ingresos: ", MiregIngreso)
    return this.http.post(`${this.baseUrl}/movimientos/ingresos`, MiregIngreso)
  }

  getDespachos(id: number) {
    const od: number = 0
    return this.http.get<any[]>(`${this.baseUrl}/movimientos/get_idpernos/${id}`)
    //.pipe<Perneria[]>(map((data: any) => data.pernos));
  }

  TraeProveedores() {
    return this.http.get(`${this.baseUrl}/perneria/proveedores`);
  }

  TraeProveedoresxId(Id: number) {
    return this.http.get(`${this.baseUrl}/proveedores/porid/workflow/${Id}`);
  }

}
