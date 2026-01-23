import { HousingLocation } from '../housing-location';
import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HousingLocationComponent } from '../housing-location/housing-location';

import { Housing } from '../housing';
import { About } from '../about/about';

@Component({
  selector: 'app-home',
  styleUrls: ['./home.scss'],
  standalone: true,
  imports: [HeroComponent, About],
  template: ` <app-hero></app-hero>
    <app-about></app-about>`,
})
export class Home implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: Housing = inject(Housing);

  ngOnInit() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
