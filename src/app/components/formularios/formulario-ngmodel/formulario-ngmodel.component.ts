import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { PaisService } from 'src/app/services/pais.service';

@Component({
  selector: 'app-formulario-ngmodel',
  templateUrl: './formulario-ngmodel.component.html',
  styleUrls: ['./formulario-ngmodel.component.css']
})
export class FormularioNgmodelComponent implements OnInit {

  constructor(private _paisService: PaisService) { }

  ngOnInit(): void {
    this._paisService.getPaises().subscribe(paises => {
      console.log(paises);
    })
  }

}
