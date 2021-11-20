import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  persona: string = "";

  constructor(private router: Router, private _loginServices: LoginService) { }

  ngOnInit(): void {
    this._loginServices.getPersona$().subscribe(persona => {
      this.persona = persona.nombre;
    });
  }

  buscarHeroe(termino: string) {
    this.router.navigate(['/buscar', termino]);
  }

  logout() {
    this._loginServices.persona$.unsubscribe();
    this._loginServices.persona$ = new Subject();
    this.persona = "";
    this.router.navigate(['/login']);
  }
}
