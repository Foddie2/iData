import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentList } from './appointment-list/appointment-list';
import { Navbar } from './navbar/navbar';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppointmentList, Navbar],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Appointment-app');
}
