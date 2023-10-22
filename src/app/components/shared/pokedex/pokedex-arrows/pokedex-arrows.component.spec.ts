import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexArrowsComponent } from './pokedex-arrows.component';

describe('PokedexArrowsComponent', () => {
  let component: PokedexArrowsComponent;
  let fixture: ComponentFixture<PokedexArrowsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexArrowsComponent]
    });
    fixture = TestBed.createComponent(PokedexArrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
