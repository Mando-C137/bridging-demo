import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxPokemonComponent } from './ngrx-pokemon.component';

describe('NgrxPokemonComponent', () => {
  let component: NgrxPokemonComponent;
  let fixture: ComponentFixture<NgrxPokemonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NgrxPokemonComponent]
    });
    fixture = TestBed.createComponent(NgrxPokemonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
