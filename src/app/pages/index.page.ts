import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
  ],
  template: `
  <h1>Homepage</h1>
  <h2>Car manufacturers</h2>
  <nav>
    <a [routerLink]="'/'">
      Home
    </a>
    <a [routerLink]="'/ford'">
      Ford
    </a>
    <a [routerLink]="'/ford/focus'">
      Ford Focus
    </a>
    <a [routerLink]="'/ford/fiesta'">
      Ford Fiesta
    </a>
    <a [routerLink]="'/ford/ranger'">
      Ford Ranger
    </a>
    <a [routerLink]="'/porsche'">
      Porsche
    </a>
    <a [routerLink]="'/porsche/911'">
      Porsche 911
    </a>
    <a [routerLink]="'/porsche/cayenne'">
      Porsche Cayenne
    </a>
    <a [routerLink]="'/porsche/taycan'">
      Porsche Taycan
    </a>
  </nav>
  `,
  styles: [
    `
      h1 {
        color: #2c3e50;
      }
      h2 {
        color: #2980b9;
      }
      nav {
        margin-bottom: 20px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 18px;
      }
      a {
        margin-right: 10px;
        text-decoration: none;
        color: #2980b9;
      }
    `,
  ],
})
export default class HomeComponent {
}
