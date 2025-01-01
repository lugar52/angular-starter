import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerneriaListComponent } from './perneria-list.component';

describe('PerneriaListComponent', () => {
  let component: PerneriaListComponent;
  let fixture: ComponentFixture<PerneriaListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerneriaListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerneriaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
