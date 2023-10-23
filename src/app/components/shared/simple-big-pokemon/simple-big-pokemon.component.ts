import { Component } from '@angular/core';
import { PokemonApiService } from '../../../service/pokemon-api.service';
import { DetailedPokemon } from '../../../types';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-simple-big-pokemon',
  template: `
    <ng-container *ngIf="pokemon$ | async as pokemon">
      <app-pokemon-route-simple [isLiked]="false" [pokemon]="pokemon" />
    </ng-container>
  `,
})
export class SimpleBigPokemonComponent {
  pokemon$: Observable<DetailedPokemon>;
  constructor(pokemonService: PokemonApiService, route: ActivatedRoute) {
    this.pokemon$ = pokemonService.fetchPokemonByName(
      route.snapshot.paramMap.get('id')!
    );
  }
}
