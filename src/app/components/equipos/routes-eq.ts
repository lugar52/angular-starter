import { Route } from '@angular/router';
import { EquiposIdComponent } from './equipos-id/equipos-id.component';
import { EquiposListComponent } from './equipos-list/equipos-list.component';
import { ListaIngresosEquiposComponent } from './lista-ingresos-equipos/lista-ingresos-equipos.component';

export default [
    { path: '', Component: EquiposListComponent},
    { path: 'equiposid', Component: EquiposIdComponent},
    { path: 'equiposing', Component: ListaIngresosEquiposComponent},
]