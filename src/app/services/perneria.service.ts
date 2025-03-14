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
    return this.http.get<any[]>(`${this.baseUrl}${seleccion}`)
  }

  getRegXProveedor(id: number): Observable<any[]> {
    let seleccion = localStorage.getItem('Seleccion')
    return this.http.get<any[]>(`${this.baseUrl}/perneria/proveedor/${id}`)
  }


  getPerneriaSel(id: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/perneria/get_item/${id}`)
  }

  get_Perno(id: string) {
    return this.http.get(`${this.baseUrl}/Perneria/${id}`)
  }

  getPerneriaIngresados(id: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/Perneria_ing/ingresos/${id}`)
  }

  inserWay(Mireg: Perneria) {
    return this.http.post(`${this.baseUrl}/railway`, Mireg)
  }



  private handleError(error: any) {
    return throwError(error);
  }

  // ---------------------------------------------------- new List ---------------------
  getPernos(): Observable<Perneria[]> {
    let seleccion = localStorage.getItem('Seleccion')
    return this.http.get<Perneria[]>(`${this.baseUrl}/perneria/todos`)
    //.pipe<Perneria[]>(map((data: any) => data.pernos));
  }

  updatePerno(id: number, perno: DatosAGrabar): Observable<any> {
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
    return this.http.post(`${this.baseUrl}/movimientos/despacho`, Mireg)
  }

  Ingresos(MiregIngreso: RegMovimientoStock): Observable<any> {
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

  newGetProveedor(prov: string, cond: string): Observable<any[]> {
    return this.http.get<any[]>(`${this.baseUrl}/perneria/materiales/${prov}/${cond}`)
  }

}
