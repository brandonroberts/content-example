import { Component, input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [
  ],
  template: `
    <h1>Model</h1>
    <p> Currently selected brand: {{ brand() }} with model: {{ model() }} </p>
  `,
})
export default class BrandComponent implements OnInit {
  brand = input<string>();
  model = input<string>();

  ngOnInit(): void {
    console.log(this.brand());
    console.log(this.model());
  }
}
