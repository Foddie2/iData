import { Component } from '@angular/core';
import { AppointmentList } from '../appointment-list/appointment-list';

@Component({
  selector: 'app-products',
  imports: [AppointmentList],
  template: `
    <h1 class="text-3xl my-5 p-4 font-bold underline">
      Hello world this is products page!
    </h1>

    <app-appointment-list></app-appointment-list>

    <img
      src="/assets/images/J15_Front.png"
      width="100"
      height="100"
      priority
      fill
    />

    <img
      ngSrc="assets/images/J15_Front.png"
      width="400"
      height="200"
      priority
      fill
    />

    <img
      ngSrc="/assets/images/J15_Front.png"
      alt="Angular logo"
      width="100"
      height="100"
    />
  `,
  styleUrl: './products.scss',
})
export class Products {}
