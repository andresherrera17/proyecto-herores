import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EjemplosPipesComponent } from './ejemplos-pipes.component';

describe('EjemplosPipesComponent', () => {
  let component: EjemplosPipesComponent;
  let fixture: ComponentFixture<EjemplosPipesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EjemplosPipesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EjemplosPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
