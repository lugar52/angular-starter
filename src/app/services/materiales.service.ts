import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpStatusCode, HttpErrorResponse } from  '@angular/common/http';
import { catchError, lastValueFrom, shareReplay, throwError } from 'rxjs';
import { forkJoin, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Material_AGrabar, Material } from '../model/materiales'

@Injectable({
  providedIn: 'root'
})
export class MaterialService {

  private API_URL: string = "";
  private httpOptions?:  any

  constructor(
    private http: HttpClient,
    ) {

      this.API_URL = 'https://myfastapi-production.up.railway.app'

      // this.API_URL = 'http://127.0.0.1:8000'
      console.log(this.API_URL)


    this.httpOptions = {
      headers: new HttpHeaders({ 'Content-Type': 'application/json'})
    };
  }

  getMaterialSel(id: number): Observable<any[]> {
    console.log("Sel: ", id )
    return this.http.get<any[]>(`${this.API_URL}/material/${id}`)
  }

  get_Material(id: string) {
    return this.http.get(`${this.API_URL}/material/${id}`)
  }

  private handleError(error: any) {
    console.error(error);
    return throwError(error);
  }

  // ---------------------------------------------------- new List ---------------------
  getMateriales(): Observable<Material[]> {
    let seleccion = localStorage.getItem('Seleccion')
    console.log('getPernos: ', `${this.API_URL}${seleccion}`)
    return this.http.get<Material[]>(`${this.API_URL}${seleccion}`)
    //.pipe<Perneria[]>(map((data: any) => data.pernos));
  }

  updateMaterial(id: number, miMaterial: Material_AGrabar): Observable<any> {
    return this.http.put<Material_AGrabar>(`${this.API_URL}/api/material/update_perno/${id}`, miMaterial);
  }

  addMaterial(material: Material): Observable<Material> {
    return this.http.post<Material>(`${this.API_URL}/add`, material);
  }

  deleteUserMaterial(id: number): Observable<Material> {
    return this.http.delete<Material>(`${this.API_URL}/${id}`);
  }

  deleteMateriales(id: number, material: Material[]): Observable<Material[]> {
    return forkJoin(
      material.map((Material) =>
        this.http.delete<Material>(`${this.API_URL}/${id}`)
      )
    );
  }

}
