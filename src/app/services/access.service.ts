import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { appsettings } from '../components/setting/appsetting';
import { Login, ResponceAcceso, Usuario } from '../model/login';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccessService {

  private http = inject(HttpClient);
  private baseUrl: string = appsettings.apiUrl
  

  constructor() { }

  registrarse(objeto:Usuario) : Observable<ResponceAcceso> {
    return this.http.post<ResponceAcceso>(`${this.baseUrl}/acceso/signup`, objeto)
  }

  login(objeto:Login) : Observable<ResponceAcceso> {
    return this.http.post<ResponceAcceso>(`${this.baseUrl}/acceso/login`, objeto)
  }

  
}
