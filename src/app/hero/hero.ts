import { Component, signal, afterNextRender } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './hero.html',
  styleUrl: './hero.scss',
})
export class HeroComponent {
  // Signals for business metrics
  stats = signal([
    { label: 'Devices Configured', value: '12k+' },
    { label: 'Warehouse Integrations', value: '450+' },
    { label: 'System Uptime', value: '99.9%' },
    { label: 'Support Response', value: '<2hr' },
  ]);

  partners = signal(['Zebra', 'Honeywell', 'iData', 'Datalogic', 'Sato']);
}
