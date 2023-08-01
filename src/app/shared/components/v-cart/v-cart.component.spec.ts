import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VCartComponent } from './v-cart.component';

describe('VCartComponent', () => {
  let component: VCartComponent;
  let fixture: ComponentFixture<VCartComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VCartComponent]
    });
    fixture = TestBed.createComponent(VCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
