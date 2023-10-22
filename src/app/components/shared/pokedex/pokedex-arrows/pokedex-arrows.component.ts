import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-pokedex-arrows',

  template: `
    <div class="flex gap-2 items-center justify-center  text-md ">
      <a
        class="block p-1 bg-sky-500 ring-slate-900 ring-1 rounded-md"
        routerLink="../pokedex"
        [queryParams]="{ from: from - 6, to: from - 1 }"
      >
        Previous
      </a>
      <a
        class="block p-1 bg-sky-500 ring-slate-900 ring-1 rounded-md"
        routerLink="../pokedex"
        [queryParams]="{ from: to + 1, to: to + 6 }"
        >Next</a
      >
    </div>
  `,
})
export class PokedexArrowsComponent {
  @Input({ required: true })
  from!: number;
  @Input({ required: true })
  to!: number;
}
