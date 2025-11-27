import { Component, Input } from '@angular/core';
import { HousingLocation } from '../housing-location';

@Component({
  selector: 'app-housing-location',
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
    </section>
  `,
  styleUrls: ['./housing-location.scss'],
})
export class HousingLocationComponent {
  // GREAT FEATURE FOR ANGULAR js
  @Input() housingLocation!: HousingLocation;
}
