import { HousingLocation } from './../housing-location';

import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ReactiveFormsModule, FormGroup, FormControl } from '@angular/forms';
import { Housing } from '../housing';
import { HousingLocationComponent } from '../housing-location/housing-location';
@Component({
  selector: 'app-details',
  standalone: true,
  imports: [ReactiveFormsModule],
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

        <!-- Reactive forms -->
        <form
          [formGroup]="applyForm"
          (ngSubmit)="submitApplication()"
          class="application-form"
        >
          <label for="firstName">First Name:</label>
          <input id="firstName" type="text" formControlName="firstName" />

          <label for="lastName">Last Name:</label>
          <input id="lastName" type="text" formControlName="lastName" />
          <label for="email">Email:</label>
          <input id="email" type="email" formControlName="email" />
          <button type="submit" class="primary">Submit Application</button>
        </form>
      </section>
    </article>
  `,
  styleUrls: ['./details.scss'],
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  housingService = inject(Housing);
  housingLocation: HousingLocation | undefined;

  // Reactive Forms
  applyForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  constructor() {
    const housingLocationId = Number(this.route.snapshot.params['id']);
    this.housingLocation =
      this.housingService.getHousingLocationById(housingLocationId);

    //Additional Reactive Forms code
    /*   this.applyForm.valueChanges.subscribe((value) => {
        console.log('Form Value Changed:', value);
      },); */
  }

  submitApplication() {
    this.housingService.submitApplication(
      this.applyForm.value.firstName ?? '',
      this.applyForm.value.lastName ?? '',
      this.applyForm.value.email ?? '',
      // this.housingLocation?.id || 0,
    );

    /*  this.applyForm.value;
    alert(
      `Application submitted!\n\n${JSON.stringify(
        this.applyForm.value,
        null,
        2
      )}`
    ); */
  }
}
