import { HousingLocation } from './../housing-location';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Housing } from '../housing';
import { HousingLocationComponent } from '../housing-location/housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  template: `
    <article class="my-3 p-4">
      <img class="listing-photo" [src]="housingLocation?.photo" />
      <section class="listing-description ">
        <h2 class="listing-heading">{{ housingLocation?.name }}</h2>
        <p class="listing-location">
          {{ housingLocation?.city }}, {{ housingLocation?.state }}
        </p>
      </section>
      <section class="listing-features">
        <h2 class="section-heading">About this location</h2>
        <ul>
          <li>
            <strong>Available Units:</strong>
            {{ housingLocation?.availableUnits }}
          </li>
          <li>
            <strong>Wifi:</strong>
            {{ housingLocation?.wifi ? 'Yes' : 'No' }}
          </li>
          <li>
            <strong>Laundry:</strong>
            {{ housingLocation?.laundry ? 'Yes' : 'No' }}
          </li>
        </ul>
      </section>
      <section>
        <h2 class="section-heading">Apply now to live here</h2>
        <button class="primary" type="button">Apply now</button>
      </section>
    </article>
  `,
  styleUrls: ['./details.scss'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housing = inject(Housing);
  housingLocation: HousingLocation | undefined;

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housing.getHousingLocationById(housingLocationId);
  }
}
