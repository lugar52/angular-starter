import { Routes } from '@angular/router';
import { ListaIngresosEquiposComponent } from './components/equipos/lista-ingresos-equipos/lista-ingresos-equipos.component'


import { NavbarComponent } from './components/navbar/navbar.component'

export const routes: Routes = [
    { path: '', component: NavbarComponent,
        children:
        [
            { path: 'equipos', loadComponent: () => import('./components/equipos/equipos-list/equipos-list.component') .then(m => m.EquiposListComponent )},
            { path: 'materiales', loadComponent: () => import('./components/Materiales/materiales-list/materiales-list.component') .then(m => m.MaterialesListComponent )},

            { path: 'perneria/id', loadComponent: () => import('./components/Perneria/despacho-id/despacho-id.component') .then(m => m.PerneriaIdComponent )},

            { path: 'pendientes-new', loadComponent: () => import('./components/Perneria/perneria-newlist/perneria-newlist.component') .then(m => m.PerneriaNewlistComponent )},
            { path: 'entregada-new', loadComponent: () => import('./components/Perneria/perneria-newlist/perneria-newlist.component') .then(m => m.PerneriaNewlistComponent )},
        ]
    }

   // { path: 'equipos', loadChildren:() => import('./components/equipos/routes')}
];
