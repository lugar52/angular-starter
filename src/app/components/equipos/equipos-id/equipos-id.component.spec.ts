import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EquiposIdComponent } from './equipos-id.component';

describe('EquiposIdComponent', () => {
  let component: EquiposIdComponent;
  let fixture: ComponentFixture<EquiposIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EquiposIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EquiposIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
