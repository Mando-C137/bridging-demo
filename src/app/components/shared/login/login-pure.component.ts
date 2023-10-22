import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Credentials } from '../../../types';

@Component({
  selector: 'app-login-pure',
  template: `
    <div class="p-4 bg-slate-100 rounded-lg">
      <form
        [formGroup]="loginForm"
        (ngSubmit)="submit()"
        class="flex flex-col gap-2 "
      >
        <div class="flex flex-col gap-1">
          <label for="username">Username</label>
          <input
            formControlName="username"
            type="text"
            name="username"
            id="username"
            class="p-1 rounded-sm"
          />
        </div>
        <div class="flex flex-col gap-1">
          <label for="password">Password</label>
          <input
            formControlName="password"
            type="password"
            name="username"
            id="password"
            class="p-1 rounded-sm"
          />
        </div>
        <div class="flex justify-center">
          <button
            class="bg-blue-500 px-3 py-1 rounded-md font-bold text-slate-50 text-md hover:bg-blue-700 hover:text-slate-200 first-letter:disabled:bg-blue-400  justify-center items-center flex gap-2 "
            type="submit"
            [disabled]="loading"
          >
            <span
              *ngIf="loading"
              class="h-4 w-4 rounded-full animate-spin transparent border-2 border-t-transparent border-red-500"
            ></span>
            Login
          </button>
        </div>
        <p *ngIf="error !== null">{{ error }}</p>
      </form>
    </div>
  `,
})
export class LoginPureComponent {
  @Input({ required: true })
  error: string | null = null;

  @Input({ required: true })
  loading: boolean = false;

  @Output() onSubmit = new EventEmitter<Credentials>();

  loginForm = new FormGroup({
    username: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  submit() {
    this.onSubmit.emit({
      password: this.loginForm.controls.password.value!,
      username: this.loginForm.controls.username.value!,
    });
  }
}
