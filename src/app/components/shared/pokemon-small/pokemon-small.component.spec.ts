import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonSmallComponent } from './pokemon-small.component';

describe('PokemonSmallComponent', () => {
  let component: PokemonSmallComponent;
  let fixture: ComponentFixture<PokemonSmallComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonSmallComponent]
    });
    fixture = TestBed.createComponent(PokemonSmallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
