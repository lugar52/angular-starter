import { Routes } from '@angular/router';

import { HomeComponent} from './components/home/home.component'
import { DespachoMatComponent } from './components/Despacho/despacho-mat/despacho-mat.component'
import { DespachoListComponent } from './components/Despacho/despacho-list/despacho-list.component'
import { RegistroComponent } from './components/Acceso/registro/registro.component';
import { LoginComponent } from './components/Acceso/login/login.component';
import { authGuard } from './components/Acceso/custom/auth.guard';

export const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '#', component: HomeComponent },
  { path: '', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },

  { path: 'despacho/:id', component: DespachoMatComponent, canActivate:[authGuard] },
  { path: 'despacholist/:id', component: DespachoListComponent },

/*   { path: 'perneria', component: PerneriaListComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full'}, */

  { path: 'perneria-new', loadComponent: () => import('./components/Perneria/perneria-newlist/perneria-newlist.component') .then(m => m.PerneriaNewlistComponent  ), canActivate:[authGuard]},
];
