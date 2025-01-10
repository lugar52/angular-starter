import { Routes } from '@angular/router';
import { ListaIngresosEquiposComponent } from './components/equipos/lista-ingresos-equipos/lista-ingresos-equipos.component'


import { SidebarComponent } from './components/sidebar/sidebar.component'

export const routes: Routes = [
    { path: '', component: SidebarComponent,
        children:
        [
            { path: 'equipos', loadComponent: () => import('./components/equipos/equipos-list/equipos-list.component') .then(m => m.EquiposListComponent )},
            { path: 'materiales', loadComponent: () => import('./components/Materiales/materiales-list/materiales-list.component') .then(m => m.MaterialesListComponent )},
            { path: 'perneria/perneria/pendientes', loadComponent: () => import('./components/Perneria/perneria-list/perneria-list.component') .then(m => m.PerneriaListComponent )},
            { path: 'perneria/perneria/entregada', loadComponent: () => import('./components/Perneria/perneria-list/perneria-list.component') .then(m => m.PerneriaListComponent )},
            { path: 'perneria/id', loadComponent: () => import('./components/Perneria/perneria-id/perneria-id.component') .then(m => m.PerneriaIdComponent )}

        ]
    }

   // { path: 'equipos', loadChildren:() => import('./components/equipos/routes')}
];
