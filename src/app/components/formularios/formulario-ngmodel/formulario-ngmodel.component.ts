import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPais } from 'src/app/interfaces/pais.interface';
import { IPersona } from 'src/app/interfaces/persona.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  pais: IPais[] = [];

  persona: IPersona = {} as IPersona;

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => {
      this.pais = paises;

      // this.pais.unshift({
      //   nombre: '[Selecciones País]',
      //   codigo: ''
      // })
      this.pais.map((elem, i) => {
        if (i == 1) {
          this.persona.paisModel = elem.codigo;
        }
        return elem;
      })
      debugger;
    })
  }

  guardar() {
    sessionStorage.setItem('form', JSON.stringify(this.persona));

  }

  getPersona() {
    let persona = sessionStorage.getItem('form')
    console.log(JSON.parse(persona));
  }

}
