import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from '../../../types';
import { Observable, map } from 'rxjs';
import { PokemonApiService } from '../../../service/pokemon-api.service';

@Component({
  selector: 'app-pokemon-small',
  template: `<div
    class="flex flex-col gap-2 justify-center items-center ring-1 ring-slate-500 rounded-lg p-2 w-36 h-40"
  >
    <a [routerLink]="'./' + pokemon.name">
      <h3
        class=" grow-0 text-md font-semibold text-slate-100 capitalize text-ellipsis overflow-hidden mx-auto"
      >
        {{ pokemon.name }}
      </h3>
    </a>
    <img
      [src]="imageUrl | async"
      [alt]="'Image of ' + pokemon.name"
      class="h-20 aspect-square flex-grow"
    />
  </div>`,
})
export class PokemonSmallComponent implements OnInit {
  @Input({ required: true }) pokemon!: Pokemon;
  imageUrl!: Observable<string>;

  constructor(private pokemonService: PokemonApiService) {}

  ngOnInit(): void {
    this.imageUrl = this.pokemonService
      .fetchPokemonByName(this.pokemon.name)
      .pipe(map((pkm) => pkm.sprites.front_default));
  }
}
