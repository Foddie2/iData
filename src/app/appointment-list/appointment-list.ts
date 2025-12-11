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
  newAppointmentDate: string = '';
  newAppointmentDescription: string = '';

  appointments: Appointment[] = [];
}
