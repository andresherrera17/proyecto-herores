
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplos-pipes',
  templateUrl: './ejemplos-pipes.component.html',
  styleUrls: ['./ejemplos-pipes.component.css']
})
export class EjemplosPipesComponent implements OnInit {

  nombre: string = 'Andres Herrera';
  PI: number = Math.PI;
  porcentaje: number = 0.234;
  salario: number = 1234.5;
  fecha: Date = new Date();

  constructor() { }

  ngOnInit(): void {
  }

}
