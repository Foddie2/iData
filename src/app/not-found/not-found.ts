import { Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  imports: [],
  template: `
    <h1 class="text-3xl my-5 p-4 font-bold underline">
      Hello this is the Error page!
    </h1>
  `,
  styleUrl: './not-found.scss',
})
export class NotFound {}
