import { Component, OnChanges, OnDestroy, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit, OnDestroy {

  heroes: Heroe[] = [];

  heroe: Heroe = {
    nombre: "Daredevil",
    bio: "Al haber perdido la vista, los cuatro sentidos restantes de Daredevil fueron aumentados por la radiación a niveles superhumanos, en el accidente que tuvo cuando era niño. A pesar de su ceguera, puede \"ver\" a través de un \"sexto sentido\" que le sirve como un radar similar al de los murciélagos.",
    img: "assets/img/daredevil.png",
    aparicion: "1964-01-01",
    casa: "Marvel"
  }

  constructor(private _heroesServices: HeroesService) { }

  ngOnInit(): void {
    this._heroesServices.getHeroes().subscribe(heroes => {
      this.heroes = heroes;
    });
  }

  agregar() {
    this._heroesServices.addHeroes(this.heroe);
  }

  ngOnDestroy(): void {
    this._heroesServices.heores$.unsubscribe();
    this._heroesServices.heores$ = new Subject();
  }


}
