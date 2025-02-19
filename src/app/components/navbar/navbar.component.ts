import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TransferdataService } from '../../services/transferdata.service'

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {

  private transferdataService = inject(TransferdataService)

  logeado: boolean = false
  private router = inject(Router)

  dato: boolean = false;

  miClick(id: number) {
    console.log(id)
    localStorage.removeItem('dataUpdate');
    switch (id) {

      case 1:
        localStorage.setItem("Seleccion",'/perneria/entregada')
        break;
      case 2:
        localStorage.setItem("Seleccion",'/perneria/pendientes')
        break
      case 0:
        localStorage.setItem("Seleccion",'/perneria/todos')
        break
      }
  }

  fnSalir() {
    localStorage.clear()
    this.router.navigate(['login'])
  }


  ngOnInit() {
    this.transferdataService.datoActual.subscribe(valor => {
      const istoken = localStorage.getItem('token')
      console.log("INI: ", istoken)
      if (istoken == null)
        valor = false
      else {
        valor = true
        console.log('Dato actualizado:', valor);
        
      }
      this.logeado = valor;
    });
  }

  onFocus() {
    this.transferdataService.datoActual.subscribe(valor => {
      const istoken = localStorage.getItem('token')
      console.log("FOC: ",istoken)
      debugger
      if (istoken == null)
        valor = false
      else {
        valor = true
        console.log('Dato actualizado:', valor);
        
      }
      this.logeado = valor;
    });
  }
  
}


