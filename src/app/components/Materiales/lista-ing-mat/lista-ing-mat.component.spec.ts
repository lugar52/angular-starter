import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaIngMatComponent } from './lista-ing-mat.component';

describe('ListaIngMatComponent', () => {
  let component: ListaIngMatComponent;
  let fixture: ComponentFixture<ListaIngMatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaIngMatComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListaIngMatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
