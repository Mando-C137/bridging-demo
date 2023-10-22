import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginPureComponent } from './login-pure.component';

describe('LoginPureComponent', () => {
  let component: LoginPureComponent;
  let fixture: ComponentFixture<LoginPureComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginPureComponent]
    });
    fixture = TestBed.createComponent(LoginPureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
