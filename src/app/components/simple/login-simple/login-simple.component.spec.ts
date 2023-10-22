import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginSimpleComponent } from './login-simple.component';

describe('LoginSimpleComponent', () => {
  let component: LoginSimpleComponent;
  let fixture: ComponentFixture<LoginSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginSimpleComponent]
    });
    fixture = TestBed.createComponent(LoginSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
