import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs';
import { PokemonApiService } from '../../../service/pokemon-api.service';
import { Pokemon } from '../../../types';

@Component({
  selector: 'app-pokedex-simple',
  template: `
    <div *ngIf="pokedexData as data" class="flex flex-col gap-2">
      <app-pokedex [pokemonList]="data.results" />
      <app-pokedex-arrows [from]="data.from" [to]="data.to" />
    </div>
  `,
})
export class PokedexSimpleComponent implements OnInit {
  pokedexData: {
    from: number;
    to: number;
    results: Pokemon[];
  } | null = null;

  constructor(
    private route: ActivatedRoute,
    private pokemonService: PokemonApiService
  ) {}
  ngOnInit(): void {
    const pokemonDataObservable = this.route.queryParamMap.pipe(
      map((params) => {
        const from = params.get('from') ? Number(params.get('from')) : 0;
        const to = params.get('to') ? Number(params.get('to')) : 5;
        return { from, to };
      }),
      mergeMap((data) => this.pokemonService.fetchPokedex({ ...data }))
    );

    pokemonDataObservable.subscribe((data) => (this.pokedexData = data));
  }
}
