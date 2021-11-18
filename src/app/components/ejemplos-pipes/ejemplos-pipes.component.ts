
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre: string = 'Andres Herrera';
  nombre2: string = 'AnDreS HeRRera benaVides'; //Andres Herrera Benavides
  PI: number = Math.PI;
  porcentaje: number = 0.236;
  salario: number = 1234.5;
  fecha: Date = new Date();
  activar: boolean = false;


  valorPromesa = new Promise<string>((resolve) => {
    setTimeout(() => {
      resolve('llego la data')
    }, 5000)
  });


  heroe = {
    nombre: 'logan',
    edad: 1000,
    otrosNombres: {
      nombre1: 'wolverine',
      nombre2: 'viejo'
    }
  }

  video: string = 'https://www.youtube.com/embed/qBtB-xcJp4c';

  constructor() { }

  ngOnInit(): void {
  }

}
