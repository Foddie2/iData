import { HousingLocation } from '../housing-location';
import { Component, inject, OnInit } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { HousingLocationComponent } from '../housing-location/housing-location';

import { Housing } from '../housing';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HeroComponent, HousingLocationComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  housingLocationList: HousingLocation[] = [];
  housingService: Housing = inject(Housing);

  ngOnInit() {
    this.housingLocationList = this.housingService.getAllHousingLocations();
  }
}
