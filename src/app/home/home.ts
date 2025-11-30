import { HousingLocation } from '../housing-location';
import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HousingLocationComponent } from '../housing-location/housing-location';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [CommonModule, HeroComponent, HousingLocationComponent],
  template: `
    <app-hero></app-hero>
    <section class="text-2xl my-5 p-4 font-bold underline ">
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location
        *ngFor="let housingLocation of housingLocationList"
        [housingLocation]="housingLocation"
      >
      </app-housing-location>
    </section>
  `,
})
export class Home {
  housingLocationList: HousingLocation[] = [];
}
