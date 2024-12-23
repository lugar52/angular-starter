import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIngresosEquiposComponent } from './lista-ingresos-equipos.component';

describe('ListaIngresosEquiposComponent', () => {
  let component: ListaIngresosEquiposComponent;
  let fixture: ComponentFixture<ListaIngresosEquiposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIngresosEquiposComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIngresosEquiposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
