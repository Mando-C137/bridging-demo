import { Component, Input } from '@angular/core';
import { Pokemon } from '../../../types';

@Component({
  selector: 'app-pokedex',
  template: `
    <div class="pt-6">
      <h2 class="text-xl text-center font-bold text-slate-800">Pokedex</h2>
      <div class="mt-4 grid  grid-cols-1 md:grid-cols-6 gap-2">
        <div *ngFor="let pokemon of pokemonList" class="flex flex-col gap-2">
          <app-pokemon-small [pokemon]="pokemon" />
        </div>
      </div>
    </div>
  `,
})
export class PokedexComponent {
  @Input({ required: true }) pokemonList!: Pokemon[];
}
