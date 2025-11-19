import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
// import { AppointmentList } from './appointment-list/appointment-list';
// import { Navbar } from './navbar/navbar';
// import { Hero } from './hero/hero';
// import { Footer } from './footer/footer';
import { Home } from './home/home';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [
    RouterOutlet,
    RouterModule,
    // AppointmentList,
    // Navbar,
    // Hero,
    // Footer,
    // Home,
  ],
  template: `<nav
      class="navbar navbar-expand-lg bg-body-tertiary p-4 sticky-top"
    >
      <div class="container-fluid">
        <a class="navbar-brand font-bold" href="#">iData</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#"
                >Products</a
              >
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link active dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action </a></li>
                <li>
                  <a class="dropdown-item" href="#">Another type action </a>
                </li>

                <!-- <li><hr class="dropdown-divider" /></li> -->
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" aria-disabled="true">Disabled</a>
            </li>
          </ul>
          <button type="button" class="btn btn-dark">Contact US</button>

          <!-- <form class="d-flex" role="search"> -->
          <!-- <input -->
          <!-- class="form-control me-2" -->
          <!-- type="search" -->
          <!-- placeholder="Search" -->
          <!-- aria-label="Search" -->
          <!-- /> -->
          <!-- <button class="btn btn-outline-success" type="submit">Search</button> -->
          <!-- <button type="button" class="btn btn-primary">Primary</button> -->
          <!-- </form> -->
        </div>
      </div>
    </nav>
    <router-outlet></router-outlet>`,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Test App');
}
