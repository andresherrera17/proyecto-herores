import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioReactivosComponent } from './formulario-reactivos.component';

describe('FormularioReactivosComponent', () => {
  let component: FormularioReactivosComponent;
  let fixture: ComponentFixture<FormularioReactivosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioReactivosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioReactivosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
