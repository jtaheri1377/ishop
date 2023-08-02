import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalCartSliderComponent } from './vertical-cart-slider.component';

describe('VerticalCartSliderComponent', () => {
  let component: VerticalCartSliderComponent;
  let fixture: ComponentFixture<VerticalCartSliderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VerticalCartSliderComponent]
    });
    fixture = TestBed.createComponent(VerticalCartSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
