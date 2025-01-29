import { Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component'
import { DespachoMatComponent } from './components/Despacho/despacho-mat/despacho-mat.component'
import { DespachosRealizadosComponent } from './components/Despacho/despachos-realizados/despachos-realizados.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '#', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'despacho/:id', component: DespachoMatComponent },
  { path: 'despacholist/:id', component: DespachosRealizadosComponent },

/*   { path: 'perneria', component: PerneriaListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}, */

  { path: 'perneria-new', loadComponent: () => import('./components/Perneria/perneria-newlist/perneria-newlist.component') .then(m => m.PerneriaNewlistComponent )},

];
