import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.html',
  styleUrls: ['./hero.scss'],
})
export class HeroComponent {
  heroHeadline = 'Welcome to Our Innovative Platform';
  heroSubtext =
    'Discover a world of possibilities with our innovative solutions where technology is our heart.';
  ctaText = 'Get Started Now';

  onCtaClick(): void {
    console.log('Call to action clicked!');
    // Implement navigation or other logic here
  }
}
