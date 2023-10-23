import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxWrapperComponent } from './ngrx-wrapper.component';

describe('NgrxWrapperComponent', () => {
  let component: NgrxWrapperComponent;
  let fixture: ComponentFixture<NgrxWrapperComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxWrapperComponent]
    });
    fixture = TestBed.createComponent(NgrxWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
