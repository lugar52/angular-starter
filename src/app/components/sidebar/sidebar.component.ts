import {ChangeDetectorRef, ChangeDetectionStrategy, Component, OnDestroy, OnInit, inject} from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTreeModule} from '@angular/material/tree';

import { RouterLink, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router  } from '@angular/router';


interface tpchildren {
  name: string;
  route: string;
  children: tpchildren[];
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    RouterLink,
    RouterOutlet,
    MatTreeModule,

    ],
    changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  mobileQuery: MediaQueryList;

   static readonly TREE_DATA: tpchildren[] = [
/*     {
      name: 'Materiales',
      route: '/materiales',
      children: [{name: 'Pendientes', route: '/pendientes', children: []}, {name: 'Completos', route: '/completos', children: []}]
    },
    {
      name: 'Equipos',
      route: '/equipos',
      children: [{name: 'Pendientes', route: '/pendientes', children: []}, {name: 'Completos', route: '/completos', children: []}]
    }, */
    {
      name: 'Perneria',
      route: '/perneria',
      children: [
        {name: 'Pendientes', route: '/perneria/perneria/pendientes', children: []},
        {name: 'Entregada', route: '/perneria/perneria/entregada', children: []}],
    }

  ]

  dataSource = SidebarComponent.TREE_DATA;
  childrenAccessor = (node: tpchildren) => node.children ?? [];
  hasChild = (_: number, node: tpchildren) => !!node.children && node.children.length > 0;

  private _mobileQueryListener: () => void;

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {
    const changeDetectorRef = inject(ChangeDetectorRef);
    const media = inject(MediaMatcher);

    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  OnInit(): void {
    localStorage.clear()
  }

  OnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
    localStorage.clear()
  }

  enruta(paonde: string) : void {
    localStorage.setItem('Seleccion', paonde)
    console.log("enruta: ", paonde)

    let  myurl = `${paonde}`;
    this.router.navigate([myurl] ).then(e => {
      if (e) {
      } else { }
    });
  }

}
