import { HousingLocation } from './../housing-location';
import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  imports: [CommonModule],
  template: `
    <p>details works!HUREEEEEEEEEEY</p>
    {{ HousingLocationId }}
  `,
  styleUrl: './details.scss',
})
export class Details {
  route: ActivatedRoute = inject(ActivatedRoute);
  HousingLocationId = 0;

  constructor() {
    this.HousingLocationId = Number(this.route.snapshot.params['id']);
  }
}
