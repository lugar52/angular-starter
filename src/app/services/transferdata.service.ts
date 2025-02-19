import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransferdataService {
  private datoFuente = new BehaviorSubject<boolean>(false);
  datoActual = this.datoFuente.asObservable();

  actualizarDato(nuevoDato: boolean) {
    this.datoFuente.next(nuevoDato);
  }
}