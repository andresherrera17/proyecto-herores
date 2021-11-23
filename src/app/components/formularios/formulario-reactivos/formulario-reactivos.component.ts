import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivos',
  templateUrl: './formulario-reactivos.component.html',
  styleUrls: ['./formulario-reactivos.component.css']
})
export class FormularioReactivosComponent implements OnInit {

  formGroup: FormGroup = new FormGroup({});


  constructor(private formBuilder: FormBuilder) {

  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm() {
    const hoy = new Date().toISOString().substring(0, 10);
    const name = "Andres Herrera";

    this.formGroup = this.formBuilder.group({
      fechaCreacion: hoy,
      nombre: [name, Validators.required],
      email: ['andresherrerab97@gmail.com', [Validators.required, Validators.email]],
      contrasena: ['', [Validators.required, Validators.minLength(5), this.validarContrasena]],

    });
  }

  validarContrasena(control: AbstractControl) {
    const contrasena = control.value;
    let error = null;

    if (!contrasena.includes('$')) {
      error = { pesos: 'Es requerido el sigo $' }
    }
    if (!parseFloat(contrasena[0])) {
      error = { ...error, number: 'Debe empezar con un numero' }
    }

    return error;
  }

  getError(controlName: string) {
    let error = '';
    const control = this.formGroup.get(controlName);
    if (control.touched && control.errors != null) {
      error = JSON.stringify(control.errors);
    }
    return error;
  }



  save() {
    console.log(this.formGroup);
  }



}
