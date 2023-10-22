import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { DetailedPokemon } from '../types';

@Injectable({
  providedIn: 'root',
})
export class PokemonApiService {
  constructor(private http: HttpClient) {}

  fetchPokemonByName(name: string) {
    return this.http
      .get<DetailedPokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(map((pkm) => ({ ...pkm, moves: pkm.moves.slice(0, 10) })));
  }

  fetchPokedex(limitations: { from: number; to: number }) {
    return this.http
      .get<{
        next: string | null;
        previous: string | null;
        results: {
          name: string;
          url: string;
        }[];
      }>(
        `https://pokeapi.co/api/v2/pokemon?limit=${
          limitations.to - limitations.from + 1
        }&offset=${limitations.from}`
      )
      .pipe(
        map((data) => ({
          from: limitations.from,
          to: limitations.to,
          results: data.results.map((pkm) => ({
            ...pkm,
            id: extractNumberFromUrl(pkm.url),
          })),
        }))
      );
  }
}

const extractNumberFromUrl = (url: string) => {
  const lastSlashIndex = url.indexOf('pokemon/');
  let End = url.length - 1;

  const str = url.substring(lastSlashIndex + 8, End);

  return parseInt(str, 10);
};
