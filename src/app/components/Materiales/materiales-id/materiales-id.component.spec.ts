import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialesIdComponent } from './materiales-id.component';

describe('MaterialesIdComponent', () => {
  let component: MaterialesIdComponent;
  let fixture: ComponentFixture<MaterialesIdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MaterialesIdComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MaterialesIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
