import { Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component'

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '#', component: HomeComponent },
  { path: '', component: HomeComponent },
/*   { path: 'perneria', component: PerneriaListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}, */
  { path: 'perneria', loadComponent: () => import('./components/Perneria/perneria-list/perneria-list.component') .then(m => m.PerneriaListComponent )},
];
