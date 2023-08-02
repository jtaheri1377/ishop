import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizontalCartSliderComponent } from './horizontal-cart-slider.component';

describe('HorizontalCartSliderComponent', () => {
  let component: HorizontalCartSliderComponent;
  let fixture: ComponentFixture<HorizontalCartSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HorizontalCartSliderComponent]
    });
    fixture = TestBed.createComponent(HorizontalCartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
