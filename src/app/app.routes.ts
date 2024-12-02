import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { MezcalListComponent } from './mezcal-list/mezcal-list.component';

export const routes: Routes = [
    {path: '', component: InicioComponent},
    {path: 'sabores', component: MezcalListComponent}
];
