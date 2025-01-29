import { Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component'
import { DespachoMatComponent } from './components/Despacho/despacho-mat/despacho-mat.component'
import { DespachoListComponent } from './components/Despacho/despacho-list/despacho-list.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '#', component: HomeComponent },
  { path: '', component: HomeComponent },
  { path: 'despacho/:id', component: DespachoMatComponent },
  { path: 'despacholist/:id', component: DespachoListComponent },

/*   { path: 'perneria', component: PerneriaListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}, */

  { path: 'perneria-new', loadComponent: () => import('./components/Perneria/perneria-newlist/perneria-newlist.component') .then(m => m.PerneriaNewlistComponent )},
  
];
