import { Component } from '@angular/core';

import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-footer',
  imports: [MatSlideToggleModule],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {}
