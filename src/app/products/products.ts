import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  imports: [],
  template: `
    <h1 class="text-3xl my-5 p-4 font-bold underline">
      Hello world this is products page!
    </h1>
    <img src="assets/images/J15_Front.png" fill />
  `,
  styleUrl: './products.scss',
})
export class Products {}
