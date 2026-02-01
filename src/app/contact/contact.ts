import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact.html',
  styleUrl: './contact.scss'
})
export class ContactComponent {
  private fb = inject(FormBuilder);

  isSubmitting = signal(false);
  showToast = signal(false); // Signal for Success Notification

  contactForm = this.fb.group({
    fullName: ['', [Validators.required, Validators.minLength(3)]],
    email: ['', [Validators.required, Validators.email]],
    subject: ['', Validators.required],
    message: ['', [Validators.required, Validators.minLength(10)]]
  });

  async onSubmit() {
    if (this.contactForm.valid) {
      this.isSubmitting.set(true);
      
      // Simulate network request
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      this.isSubmitting.set(false);
      this.showToast.set(true); // Trigger Toast
      this.contactForm.reset();

      // Auto-hide toast after 4 seconds
      setTimeout(() => this.showToast.set(false), 4000);
    }
  }

//Technical Documentation
  // Add this to your existing ContactComponent class
docs = signal([
  { id: 1, title: 'ZT411 Setup Guide', brand: 'Zebra', type: 'PDF', size: '2.4 MB', icon: 'bi-file-earmark-pdf' },
  { id: 2, title: 'Voyager 1200g Manual', brand: 'Honeywell', type: 'PDF', size: '1.8 MB', icon: 'bi-file-earmark-pdf' },
  { id: 3, title: 'iData K1S Config Tool', brand: 'iData', type: 'ZIP', size: '15.2 MB', icon: 'bi-file-earmark-zip' },
  { id: 4, title: 'Network Utility Pro', brand: 'Zebra', type: 'EXE', size: '8.4 MB', icon: 'bi-file-earmark-binary' }
]);

downloadFile(title: string) {
  console.log(`Initiating download for: ${title}`);
  // Implementation for file service trigger goes here
}
}