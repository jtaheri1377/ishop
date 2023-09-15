import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecifyComponent } from './specify.component';

describe('SpecifyComponent', () => {
  let component: SpecifyComponent;
  let fixture: ComponentFixture<SpecifyComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SpecifyComponent]
    });
    fixture = TestBed.createComponent(SpecifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
