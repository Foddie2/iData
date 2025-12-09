import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-housing-location',
  imports: [RouterModule],
  standalone: true,
  template: `
    <section class="text-2xl my-5 p-4 listing">
      <img
        [src]="housingLocation.photo"
        class="listing-photo"
        alt="{{ housingLocation.name }}"
      />
      <h2 class="listing-heading">{{ housingLocation.name }}</h2>
      <p class="listing-location">
        {{ housingLocation.city }}, {{ housingLocation.state }}
      </p>

      <!-- Property Binding router -->
      <!-- Render Dynamic files -->
      <a [routerLink]="['/details', housingLocation.id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.scss'],
})
export class HousingLocationComponent {
  // GREAT FEATURE FOR ANGULAR js
  @Input() housingLocation!: HousingLocation;
}
