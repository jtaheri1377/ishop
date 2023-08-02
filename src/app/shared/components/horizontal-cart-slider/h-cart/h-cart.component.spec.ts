import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HCartComponent } from './h-cart.component';

describe('HCartComponent', () => {
  let component: HCartComponent;
  let fixture: ComponentFixture<HCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HCartComponent]
    });
    fixture = TestBed.createComponent(HCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
