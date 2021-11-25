import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/heroes/buscador/buscador.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  {
    path: 'heroes',
    loadChildren: () => import('./components/heroes/heroes.module').then(m => m.HeroesModule)
  },
  { path: 'heroe/:id', component: HeroeComponent },
  { path: 'pipes', component: EjemplosPipesComponent },
  { path: 'form1', component: FormularioNgmodelComponent },
  { path: 'form2', component: FormularioReactivosComponent },
  { path: '**', pathMatch: 'full', redirectTo: "home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
