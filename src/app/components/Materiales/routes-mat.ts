import { MaterialesIdComponent } from './materiales-id/materiales-id.component';
import { MaterialesListComponent } from './materiales-list/materiales-list.component';
import { ListaIngMatComponent } from './lista-ing-mat/lista-ing-mat.component';

export default [
    { path: '', Component: MaterialesListComponent},
    { path: 'materialesid', Component: MaterialesIdComponent},
    { path: 'materialesing', Component: ListaIngMatComponent},
]