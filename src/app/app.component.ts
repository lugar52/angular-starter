import { Component } from '@angular/core';
import { RouterOutlet, ActivatedRoute, Router   } from '@angular/router';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
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
