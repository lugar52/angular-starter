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
    localStorage.removeItem('dataUpdate');
    switch (id) {

      case 1:
        localStorage.setItem("Seleccion",'/api/perneria/entregada')
        break;
      case 2:
        localStorage.setItem("Seleccion",'/api/perneria/pendientes')
        break
      case 0:
        localStorage.setItem("Seleccion",'/api/perneria/todos')
        break
      }
  }
}
