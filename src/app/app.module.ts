//angular
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';

//services
import { HeroesService } from './services/heroes.service';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListaComponent } from './components/observables/lista/lista.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';

@NgModule({
  declarations: [ //componentes, pipes
    AppComponent,
    HomeComponent,
    HeroesComponent,
    AboutComponent,
    BuscadorComponent,
    HeroeComponent,
    HeroeTarjetaComponent,
    NavbarComponent,
    ListaComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    ContrasenaPipe
  ],
  imports: [ // librerias, modulos propios de angular
    BrowserModule,
    AppRoutingModule
  ],
  providers: [HeroesService],//servicios , inspectores
  bootstrap: [AppComponent] //componente que se ejecuta primero
})
export class AppModule { }
