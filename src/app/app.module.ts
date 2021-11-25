//angular
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//components
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { LoginComponent } from './components/login/login.component';
import { AboutComponent } from './components/about/about.component';
import { BuscadorComponent } from './components/heroes/buscador/buscador.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { HeroeTarjetaComponent } from './components/heroes/heroe-tarjeta/heroe-tarjeta.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ListaComponent } from './components/observables/lista/lista.component';
import { EjemplosPipesComponent } from './components/ejemplos-pipes/ejemplos-pipes.component';
import { FormularioReactivosComponent } from './components/formularios/formulario-reactivos/formulario-reactivos.component';
import { FormularioNgmodelComponent } from './components/formularios/formulario-ngmodel/formulario-ngmodel.component';

//services
import { LoginService } from './services/login.service';
import { HeroesService } from './services/heroes.service';
import { PaisService } from './services/pais.service';


//Pipes
import { MayusculasPipe } from './pipes/mayusculas.pipe';
import { ContrasenaPipe } from './pipes/contrasena.pipe';
import { CapitalizarPipe } from './pipes/capitalizar.pipe';
import { DomSeguroPipe } from './pipes/dom-seguro.pipe';
import { LimitStringPipe } from './pipes/limit-string.pipe';


//Idiomas
import localEs from '@angular/common/locales/es';
import localFr from '@angular/common/locales/fr';

registerLocaleData(localEs);
registerLocaleData(localFr);

@NgModule({
  declarations: [ //componentes, pipes
    AppComponent,
    HomeComponent,
    AboutComponent,
    HeroeComponent,
    NavbarComponent,
    ListaComponent,
    EjemplosPipesComponent,
    MayusculasPipe,
    ContrasenaPipe,
    CapitalizarPipe,
    DomSeguroPipe,
    LoginComponent,
    LimitStringPipe,
    FormularioNgmodelComponent,
    FormularioReactivosComponent
  ],
  imports: [ // librerias, modulos propios de angular
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HeroesService,
    LoginService,
    PaisService,
    {
      provide: LOCALE_ID,
      useValue: 'es'
    }
  ],//servicios , inspectores
  bootstrap: [AppComponent] //componente que se ejecuta primero
})
export class AppModule { }
