import { Component } from '@angular/core';
import { ActivatedRoute, Router  } from '@angular/router';

@Component({
  selector: 'app-navigations',
  standalone: true,
  imports: [],
  templateUrl: './navigations.component.html',
  styleUrl: './navigations.component.css'
})
export class NavigationsComponent {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {   }

  Pendientes() {
    localStorage.setItem('Sel_equipos', '0');

    let  myurl = `${'equipos'}`;
    this.router.navigate([myurl] ).then(e => {
    });
  }

  Ingresados() {
    localStorage.setItem('Sel_equipos', '1');

    let  myurl = `${'equipos'}`;
    this.router.navigate([myurl] ).then(e => {
    });
  }

}
