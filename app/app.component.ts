import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <app-title [subtitle]='subtitle'></app-title>
    <app-contact></app-contact>
  `
})

export class AppComponent {
  subtitle = '(v1) New way to build web app';
}
