import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Heroe } from 'src/app/interfaces/heroe.interface';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent implements OnInit {

  heroe: Heroe = {
    nombre: '',
    bio: '',
    img: '',
    aparicion: '',
    casa: ''
  };

  constructor(
    private activatedRoute: ActivatedRoute,
    private _heroesServices: HeroesService) {
    this.activatedRoute.params.subscribe(params => {
      this.heroe = this._heroesServices.getHeroe(params["id"]);
    })
  }

  ngOnInit(): void {
  }

}
