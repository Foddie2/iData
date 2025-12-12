import { Component } from '@angular/core';

import { Appointment } from '../models/appointment';
@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList {
  // Properties for new appointment inputs
  newAppointmentTitle: string = '';
  newAppointmentDate: Date = new Date();
  newAppointmentDescription: string = '';

  appointments: Appointment[] = [];

  // Method to add a new appointment
  // addAppointment() {
  //   alert(
  //     this.newAppointmentTitle +
  //       ' ' +
  //       this.newAppointmentDate +
  //       ' ' +
  //       this.newAppointmentDescription
  //   );

  /*    if (this.newAppointmentTitle && this.newAppointmentDate) {
      const newAppointment: Appointment = {
        id: this.appointments.length + 1,
        title: this.newAppointmentTitle,
        date: this.newAppointmentDate,
        description: this.newAppointmentDescription,
      };
      this.appointments.push(newAppointment);
    } */
}

// Clear input fields after adding
/*   this.newAppointmentTitle = '';
      this.newAppointmentDate = new Date();
      this.newAppointmentDescription = '';
    }
 */
