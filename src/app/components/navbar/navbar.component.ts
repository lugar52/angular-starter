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
    if (id == 1) {
      localStorage.setItem("Seleccion",'/api/perneria/entregada')
    } else {
      localStorage.setItem("Seleccion",'/api/perneria/pendientes')
    }

  }
}
