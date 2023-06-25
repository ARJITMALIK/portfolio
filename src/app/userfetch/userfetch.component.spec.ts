import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserfetchComponent } from './userfetch.component';

describe('UserfetchComponent', () => {
  let component: UserfetchComponent;
  let fixture: ComponentFixture<UserfetchComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UserfetchComponent]
    });
    fixture = TestBed.createComponent(UserfetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
