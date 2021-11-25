import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  heroes: Heroe[] = [];
  termino: string = '';

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) { }

  ngOnInit(): void {
    // traer de la url el termino que vamos a buscar y pasarselo como parametro
    // a la funcion buscarHeroes
    // asignan lo que retorne la funcion bucarHeroes a una variable global
    this.activatedRoute.params.subscribe(params => {
      this.termino = params['termino'];
      this.heroes = this._heroesService.buscarHeroe(params['termino']);
    })

  }

}
