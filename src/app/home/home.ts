import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="primary" type="button">Search</button>
      </form>
    </section>
  `,
  styleUrls: ['./home.scss'],
  imports: [HeroComponent],
})
export class Home {}
