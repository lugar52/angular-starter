import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DespachosRealizadosComponent } from './despachos-realizados.component';

describe('DespachosRealizadosComponent', () => {
  let component: DespachosRealizadosComponent;
  let fixture: ComponentFixture<DespachosRealizadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DespachosRealizadosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DespachosRealizadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
