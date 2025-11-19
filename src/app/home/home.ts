import { Component } from '@angular/core';
import { HeroComponent } from '../hero/hero';
import { Footer } from '../footer/footer';

@Component({
  selector: 'app-home',
  template: `
    <app-hero></app-hero>
    <section>
      <form>
        <input type="text" placeholder="Filter by city" />
        <button class="bg-stone" type="button">Search</button>
      </form>
    </section>
    <app-footer></app-footer>
  `,
  styleUrls: ['./home.scss'],
  imports: [HeroComponent, Footer],
})
export class Home {}
