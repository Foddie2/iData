import { Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
// import { HousingLocationComponent } from '../housing-location/housing-location';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  showScrollButton() {
    throw new Error('Method not implemented.');
  }
  // Signals for business metrics
  stats = signal([
    { label: 'Devices Configured', value: '12k+' },
    { label: 'Warehouse Integrations', value: '450+' },
    { label: 'System Uptime', value: '99.9%' },
    { label: 'Support Response', value: '<2hr' },
  ]);

  partners = signal([
    'Zebra',
    'Honeywell',
    'iData',
    'Datalogic',
    'Printronix',
    'Intermec',
    'CognitiveTPG',
    'Toshiba',
  ]);
}

export class HomeComponent {
  showScrollButton = signal(false);

  constructor() {
    // FIX: Use afterNextRender to handle browser-only events safely
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        const scrollOffset =
          window.pageYOffset || document.documentElement.scrollTop;
        this.showScrollButton.set(scrollOffset > 400);
      });
    });
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
