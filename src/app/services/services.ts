import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

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
}
