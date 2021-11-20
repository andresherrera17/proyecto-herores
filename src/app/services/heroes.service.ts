import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Heroe } from '../interfaces/heroe.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  // Observables = ciclo de vida infinito o hasta que lo destruyamos
  // Promesas = ciclo de vida depende del then y el catch


  heores$: Subject<Heroe[]>;
  heroes: Heroe[] = [];


  constructor() {
    this.heores$ = new Subject();
    console.log('Servicio heores listo para utilizar')
  }

  getHeroes(): Observable<Heroe[]> {
    return this.heores$.asObservable();
  }

  getHeroe(index: string): Heroe {
    return this.heroes[index];
  }

  addHeroes(heroe: Heroe) {
    this.heroes.push(heroe);
    this.heores$.next(this.heroes);
  }


  // se debe crear una funcion que busque heroes por un termino y me retorne todos los heroes
  // que contengan ese termino
  buscarHeroe(termino: string): Heroe[] {
    const consulta = this.heroes.map((heroe, index) => {
      heroe.idx = index
      return heroe
    }).filter(heroe => heroe.nombre.toLowerCase().trim().includes(termino.toLowerCase().trim()))

    return consulta
  }
}
