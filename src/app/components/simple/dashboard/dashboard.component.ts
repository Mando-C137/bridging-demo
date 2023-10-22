import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  template: `
    <div
      class="absolute left-0 top-0 w-full flex h-16 p-2 items-center justify-center "
    >
      <button
        class="p-2 ring-1 ring-slate-600 bg-blue-600 rounded-md"
        routerLink="./login"
      >
        Logout
      </button>
    </div>
    <main class="relative">
      <p class="font-bold text-2xl text-slate-900">Hello you are logged in</p>
      <div class="grid grid-cols-3 ">
        <h2 class="text-lg cursor-pointer" routerLink="../pokedex">
          View Pokedex
        </h2>
      </div>
    </main>
  `,
})
export class DashboardComponent {}
