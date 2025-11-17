import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AppointmentList } from './appointment-list/appointment-list';
import { Navbar } from './navbar/navbar';
import { Hero } from './hero/hero';
import { Footer } from './footer/footer';
import { Home } from './home/home';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet, AppointmentList, Navbar, Hero, Footer, Home],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Appointment-app');
}
