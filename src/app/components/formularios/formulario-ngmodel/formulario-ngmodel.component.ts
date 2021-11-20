import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { IPais } from 'src/app/interfaces/pais.interface';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  pais: any[] = [];

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => {
      this.pais = paises;

      this.pais.unshift({
        nombre: '[Selecciones País]',
        codigo: ''
      })
    })
  }

  guardar(form: NgForm) {
    console.log(form);
  }

  cambiarValorPais(valorPais: any) {
    console.log(valorPais)
  }

}
