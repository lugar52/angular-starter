import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerneriaIdComponent } from './perneria-id.component';

describe('PerneriaIdComponent', () => {
  let component: PerneriaIdComponent;
  let fixture: ComponentFixture<PerneriaIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerneriaIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerneriaIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
