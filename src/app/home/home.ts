import { HousingLocation } from '../housing-location';
import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HousingLocationComponent } from '../housing-location/housing-location';

import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [HeroComponent],
  template: ` <app-hero></app-hero> `,
})
export class Home implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: Housing = inject(Housing);

  ngOnInit() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
