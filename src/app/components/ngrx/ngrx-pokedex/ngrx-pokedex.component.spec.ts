import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokedexSimpleComponent } from './pokedex-simple.component';

describe('PokedexSimpleComponent', () => {
  let component: PokedexSimpleComponent;
  let fixture: ComponentFixture<PokedexSimpleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokedexSimpleComponent]
    });
    fixture = TestBed.createComponent(PokedexSimpleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
