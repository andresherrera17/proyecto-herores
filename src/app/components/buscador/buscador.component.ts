import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // traer de la url el termino que vamos a buscar y pasarselo como parametro
    // a la funcion buscarHeroes
    // asignan lo que retorne la funcion bucarHeroes a una variable global


  }

}
