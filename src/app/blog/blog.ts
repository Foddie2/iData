import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface Post {
  id: number;
  title: string;
  excerpt: string;
  category: 'Hardware' | 'Software' | 'Industry';
  author: string;
  date: string;
  image: string;
}

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class BlogComponent {
  selectedCategory = signal<string>('All');

  posts = signal<Post[]>([
    {
      id: 1,
      title: 'Optimizing Zebra ZT411 for High-Volume Labels',
      excerpt:
        'Learn the specific calibration settings needed for 24/7 industrial printing operations.',
      category: 'Hardware',
      author: 'Tech Team',
      date: 'Feb 10, 2026',
      image: 'assets/blog/zebra-printer.jpg',
    },
    {
      id: 2,
      title: 'The Future of 2D Barcodes in Warehousing',
      excerpt:
        'How GS1 Digital Link is changing the way we track inventory across the supply chain.',
      category: 'Industry',
      author: 'Sarah Chen',
      date: 'Feb 05, 2026',
      image: 'assets/blog/warehouse-tech.jpg',
    },
    {
      id: 3,
      title: 'Integrating iData Scanners with Oracle WMS',
      excerpt:
        'A step-by-step guide to seamless middleware configuration for enterprise handhelds.',
      category: 'Software',
      author: 'James Wilson',
      date: 'Jan 28, 2026',
      image: 'assets/blog/idata-integration.jpg',
    },
  ]);

  filteredPosts = computed(() => {
    const cat = this.selectedCategory();
    return cat === 'All'
      ? this.posts()
      : this.posts().filter((p) => p.category === cat);
  });
}
