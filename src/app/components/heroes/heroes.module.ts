import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HeroesRoutingModule } from './heroes-routing.module';
import { HeroesComponent } from './heroes.component';
import { HeroeTarjetaComponent } from './heroe-tarjeta/heroe-tarjeta.component';
import { BuscadorComponent } from './buscador/buscador.component';


@NgModule({
  declarations: [
    HeroesComponent,
    HeroeTarjetaComponent,
    BuscadorComponent
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule
  ]
})
export class HeroesModule { }
