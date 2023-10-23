import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleWrapperComponent } from './simple-wrapper.component';

describe('SimpleWrapperComponent', () => {
  let component: SimpleWrapperComponent;
  let fixture: ComponentFixture<SimpleWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleWrapperComponent]
    });
    fixture = TestBed.createComponent(SimpleWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
