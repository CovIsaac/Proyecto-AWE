import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { SobreNosotrosComponent } from './sobre-nosotros/sobre-nosotros.component';
import { LoginComponent } from './login/login.component';
import { MezcalListComponent } from './mezcal-list/mezcal-list.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'sobre-nosotros', component: SobreNosotrosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'sabores', component: MezcalListComponent }
];

export const appRoutes = [
  provideRouter(routes)
];
