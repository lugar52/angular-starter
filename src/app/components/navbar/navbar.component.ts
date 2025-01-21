import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {



  miClick(id: number) {
    console.log(id)
    switch (id) {

      case 1:
        localStorage.setItem("Seleccion",'/api/perneria/entregada')
        break;
      case 2:
        localStorage.setItem("Seleccion",'/api/perneria/pendientes')
        break
      case 3:
        localStorage.setItem("Seleccion",'/api/materiales/entregados')
        break
      case 4:
        localStorage.setItem("Seleccion",'/api/materiales/pendientes')
        break
      }
  }
}
