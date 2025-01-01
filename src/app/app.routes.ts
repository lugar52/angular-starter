import { Routes } from '@angular/router';
import { ListaIngresosEquiposComponent } from './components/equipos/lista-ingresos-equipos/lista-ingresos-equipos.component'
import { SidebarComponent } from '../app/components/sidebar/sidebar.component'


export const routes: Routes = [
    { path: '', component: SidebarComponent,
        children: 
        [
            { path: 'equipos', loadComponent: () => import('./components/equipos/equipos-list/equipos-list.component') .then(m => m.EquiposListComponent )},
            { path: 'materiales', loadComponent: () => import('./components/Materiales/materiales-list/materiales-list.component') .then(m => m.MaterialesListComponent )},
            { path: 'perneria', loadComponent: () => import('./components/Perneria/perneria-list/perneria-list.component') .then(m => m.PerneriaListComponent )},
        ]
    }
    
   // { path: 'equipos', loadChildren:() => import('./components/equipos/routes')}
];
