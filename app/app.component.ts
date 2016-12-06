import { Component } from '@angular/core';

@Component({
  selector: 'app',
  template: `
    <app-title [subtitle]='subtitle'></app-title>

    <nav>
      <a routerLink="contact" routerLinkActive="active">Contacts</a>
      <a routerLink="crisis" routerLinkActive="active">Crisis</a>
      <a routerLink="hero" routerLinkActive="active">Heroes</a>
    </nav>

    <router-outlet></router-outlet>
  `
})

export class AppComponent {
  subtitle = '(v1) New way to build web app';
}
