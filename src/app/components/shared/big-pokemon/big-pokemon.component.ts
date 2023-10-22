import { Component, EventEmitter, Input, Output } from '@angular/core';
import { DetailedPokemon } from '../../../types';

@Component({
  selector: 'app-pokemon-route-simple',
  template: `<div class="p-12 px-20">
    <div class="grid md:grid-cols-2 gap-1 rounded-md">
      <div class=" bg-sky-300 flex flex-col items-center p-4 rounded-md">
        <h2 class="text-2xl font-bold capitalize">{{ pokemon.name }}</h2>
        <img [src]="pokemon.sprites.front_default" alt="" class="h-48 w-48" />
      </div>
      <div class=" bg-sky-300 flex flex-col items-center p-4 rounded-md">
        <h3 class="text-2xl font-bold capitalize">Some Attacks</h3>
        <img [src]="pokemon.sprites.back_default" alt="" class="h-48 w-48" />
        <ul class="flex flex-row flex-wrap gap-2">
          <li
            *ngFor="let move of pokemon.moves"
            class="bg-slate-600 text-slate-100 rounded-full capitalize px-2 py-1 "
          >
            {{ move.move.name }}
          </li>
        </ul>
      </div>
      <div class=" bg-sky-300 flex flex-col items-center p-4 rounded-md">
        <img [src]="pokemon.sprites.front_shiny" alt="" class="h-48 w-48 " />
        <div>
          <p>
            The Pokemon <span class="capitalize">{{ pokemon.name }}</span> is
            {{ pokemon.weight }} lbs heavy and its height reaches
            {{ pokemon.height }} ft.
          </p>
        </div>
      </div>
      <div class=" bg-sky-300 flex flex-col items-center p-4 rounded-md">
        <img [src]="pokemon.sprites.back_shiny" alt="" class="h-48 w-48 " />
        <button
          class="bg-red-600 p-2 rounded-lg font-semibold"
          (click)="likeEmitter.emit()"
        >
          {{ isLiked ? 'Unlike' : 'Like' }} This Pokemon
        </button>
      </div>
    </div>
  </div>`,
})
export class BigPokemonComponent {
  @Input({ required: true })
  pokemon!: DetailedPokemon;
  @Input({ required: true })
  isLiked!: boolean;
  @Output()
  likeEmitter = new EventEmitter();
}
