import { Component, OnInit } from '@angular/core';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  persona: IPersona = {
    nombre: 'Andres Herrera',
    pass: '1233sdasd'
  }

  constructor(private _loginServices: LoginService) { }

  ngOnInit(): void {
  }

  login() {
    this._loginServices.login(this.persona);
  }




}
