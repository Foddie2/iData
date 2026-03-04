import { Component, signal, inject, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetailComponent {
  private route = inject(ActivatedRoute);

  // Mock Data Store (Replace with a service call later)
  private allPosts = signal([
    {
      id: 1,
      title: 'Optimizing Zebra ZT411 for High-Volume Labels',
      content: `Industrial printing environments require more than just "plug and play" setups... (detailed technical guide text here)`,
      category: 'Hardware',
      author: 'Tech Team',
      date: 'Feb 10, 2026',
      tags: ['Zebra', 'Industrial Printing', 'Calibration'],
    },
    // ... add more posts here
  ]);

  // Reactive ID from URL
  postId = signal<string | null>(null);

  // Derived Post based on the ID
  post = computed(() => {
    const id = Number(this.postId());
    return this.allPosts().find((p) => p.id === id);
  });

  constructor() {
    this.route.paramMap.subscribe((params) => {
      this.postId.set(params.get('id'));
    });
  }
}
