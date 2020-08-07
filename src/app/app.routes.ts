import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { AnimalesComponent } from './components/animales/animales.component';
import { AnimalComponent } from './components/animal/animal.component';
import { BuscadorComponent } from './components/buscador/buscador.component';

// DEFINICION DE RUTAS

const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'animales', component: AnimalesComponent},
  {path: 'animal/:id', component: AnimalComponent},
  {path: 'buscar/:termino', component: BuscadorComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);


