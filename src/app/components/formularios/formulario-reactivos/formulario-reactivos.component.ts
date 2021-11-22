import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit {

  formGroup: FormGroup;


  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
  }

  buildForm() {
    const hoy = new Date().toISOString().substring(0, 10);
    const name = "Andres Herrera";

    this.formGroup = this.formBuilder.group({
      fechaCreacion: hoy,
      nombre: name,
      email: 'andresherrerab97@gmail.com',
      contrasena: ''
    });
  }

}
