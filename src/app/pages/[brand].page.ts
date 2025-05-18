import { Component, input, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-brand',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  template: `
    <h1>Brand</h1>
    <p> Currently selected brand: {{ brand() }} </p>
    <router-outlet></router-outlet>
  `,
})
export default class BrandComponent implements OnInit {
  brand = input<string>();

  ngOnInit(): void {
    console.log(this.brand());
  }
}
