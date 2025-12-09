import { HousingLocation } from '../housing-location';
import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HousingLocationComponent } from '../housing-location/housing-location';

import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [HeroComponent, HousingLocationComponent],
  template: `
    <app-hero></app-hero>
    <section class=" my-3 p-4">
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
    
    <section class="results  my-3 p-4">
      @for (housingLocation of housingLocationList; track housingLocation) {
        <app-housing-location
          [housingLocation]="housingLocation"
          >
        </app-housing-location>
      }
    </section>
    `,
})
export class Home implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: Housing = inject(Housing);

  ngOnInit() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
