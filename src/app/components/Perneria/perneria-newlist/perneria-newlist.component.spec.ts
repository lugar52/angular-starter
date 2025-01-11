import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerneriaNewlistComponent } from './perneria-newlist.component';

describe('PerneriaNewlistComponent', () => {
  let component: PerneriaNewlistComponent;
  let fixture: ComponentFixture<PerneriaNewlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PerneriaNewlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerneriaNewlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
