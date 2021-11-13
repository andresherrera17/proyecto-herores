import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  buscarHeroe(termino: string) {
    //1. Se debe redireccionar al componente buscar enviando por url el termino
    console.log(termino);
  }
}
