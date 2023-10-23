import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBigPokemonComponent } from './simple-big-pokemon.component';

describe('SimpleBigPokemonComponent', () => {
  let component: SimpleBigPokemonComponent;
  let fixture: ComponentFixture<SimpleBigPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SimpleBigPokemonComponent]
    });
    fixture = TestBed.createComponent(SimpleBigPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
