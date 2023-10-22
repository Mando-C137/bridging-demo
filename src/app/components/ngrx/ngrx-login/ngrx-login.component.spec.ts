import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLoginComponent } from './ngrx-login.component';

describe('NgrxLoginComponent', () => {
  let component: NgrxLoginComponent;
  let fixture: ComponentFixture<NgrxLoginComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxLoginComponent]
    });
    fixture = TestBed.createComponent(NgrxLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
