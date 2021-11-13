import { Component, OnChanges, OnInit } from '@angular/core';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Heroe[] = [];

  constructor(private _heroesServices: HeroesService) { }

  ngOnInit(): void {
    debugger;
    this.heroes = this._heroesServices.getHeroes();
  }

}
