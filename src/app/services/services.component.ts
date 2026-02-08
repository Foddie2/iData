import { Component, signal, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';

interface ScanGridService {
  id: number;
  title: string;
  icon: string;
  description: string;
  capabilities: string[];
}

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss',
})
export class ServicesComponent {
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  selectedCategory = signal<string>('All');

  constructor() {
    // Sync URL to State: Listen for query parameter changes
    this.route.queryParamMap.subscribe((params) => {
      const cat = params.get('cat');
      if (cat) {
        this.selectedCategory.set(cat);
      } else {
        this.selectedCategory.set('All');
      }
    });
  }

  // Update State to URL: Navigate when filter is clicked
  setFilter(category: string) {
    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: { cat: category === 'All' ? null : category },
      queryParamsHandling: 'merge', // Preserve other params if any
    });
  }

  // ... (filteredServices and categories computed signals remain the same)

  services = signal<ScanGridService[]>([
    {
      id: 1,
      title: 'Barcode Configuration',
      icon: 'bi-qr-code-scan',
      description:
        'Expert symbolic mapping and symbology optimization for high-density 1D/2D barcodes.',
      capabilities: [
        'Symbology Tuning',
        'Prefix/Suffix Logic',
        'Data Formatting',
      ],
    },
    {
      id: 2,
      title: 'Warehouse Systems Integration',
      icon: 'bi-boxes',
      description:
        'Direct integration of Zebra and Honeywell scanners with top-tier WMS and ERP platforms.',
      capabilities: ['API Connectivity', 'Middleware Setup', 'Legacy Sync'],
    },
    {
      id: 3,
      title: 'Device Fleet Deployment',
      icon: 'bi-cpu',
      description:
        'Large-scale configuration and rollout of handheld mobile computers and industrial printers.',
      capabilities: ['Bulk Staging', 'Firmware Lockdown', 'MDM Enrollment'],
    },
    {
      id: 4,
      title: 'Scanning Infrastructure Support',
      icon: 'bi-broadcast-pin',
      description:
        'Network optimization specifically designed for low-latency warehouse scanning environments.',
      capabilities: [
        'Signal Mapping',
        'AP Calibration',
        'Packet Prioritization',
      ],
    },
  ]);

  categories = computed(() => {
    const allCategories = new Set<string>();
    allCategories.add('All');
    this.services().forEach((service) => {
      service.capabilities.forEach((cap) => {
        allCategories.add(cap);
      });
    });
    return Array.from(allCategories);
  });

  filteredServices = computed(() => {
    const category = this.selectedCategory();
    if (category === 'All') {
      return this.services();
    }
    return this.services().filter((service) =>
      service.capabilities.includes(category),
    );
  });
}
