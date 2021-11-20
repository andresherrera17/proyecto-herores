import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioNgmodelComponent } from './formulario-ngmodel.component';

describe('FormularioNgmodelComponent', () => {
  let component: FormularioNgmodelComponent;
  let fixture: ComponentFixture<FormularioNgmodelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioNgmodelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioNgmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
