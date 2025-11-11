import { Component } from '@angular/core';

import { Appointment } from '../models/appointment';
@Component({
  selector: 'app-appointment-list',
  imports: [],
  templateUrl: './appointment-list.html',
  styleUrl: './appointment-list.scss',
})
export class AppointmentList {
  appointments: Appointment = {
    id: 1,
    title: 'Doctor Appointment',
    date: new Date('2024-07-01T10:00:00'),
    description: 'Annual check-up with Dr. Smith',
  };
}
