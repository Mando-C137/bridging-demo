import { Component } from '@angular/core';

@Component({
  selector: 'app-simple-wrapper',
  template: ` <nav
      class="absolute left-0 top-0 w-full h-16 p-2 items-center justify-center "
    >
      <ul class="flex justify-evenly p-2 ">
        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../login"
          >
            Logout
          </a>
        </li>
        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../dashboard"
          >
            Dashboard
          </a>
        </li>

        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../pokedex"
          >
            Pokedex
          </a>
        </li>
        <li>
          <a
            class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
            routerLink="../pokedex/lugia"
          >
            Lugia
          </a>
        </li>
      </ul>
    </nav>
    <router-outlet></router-outlet>`,
})
export class SimpleWrapperComponent {}
