// src/app/shared/directives/scroll-top.directive.ts
import {
  Directive,
  signal,
  afterNextRender,
  HostListener,
  output,
} from '@angular/core';

@Directive({
  selector: '[appScrollTop]',
  standalone: true,
})
export class ScrollTopDirective {
  // Use a signal to track visibility internally
  isVisible = signal(false);

  // Output to notify the parent component when to show/hide the button
  visibilityChange = output<boolean>();

  constructor() {
    afterNextRender(() => {
      window.addEventListener('scroll', () => {
        const scrollOffset =
          window.pageYOffset || document.documentElement.scrollTop;
        const visible = scrollOffset > 400;

        if (this.isVisible() !== visible) {
          this.isVisible.set(visible);
          this.visibilityChange.emit(visible);
        }
      });
    });
  }

  // Method to be called by the host element
  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
}
