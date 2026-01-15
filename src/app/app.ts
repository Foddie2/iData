import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RouterModule } from '@angular/router';
import { Footer } from './footer/footer';
@Component({
  standalone: true,
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, Footer],
  template: `
    <nav class="navbar navbar-expand-lg bg-body-tertiary p-4 sticky-top fixed">
      <div class="container-fluid ">
        <a class="navbar-brand font-weight-bold" routerLink="/">iData</a>
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
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <ul
            class="navbar-nav justify-content-center mx-auto mb-2 mb-lg-0 text-uppercase"
          >
            <li class="nav-item">
              <a
                class="nav-link active text-bold"
                aria-current="page"
                routerLink="/"
                >Home</a
              >
            </li>
            <li class="nav-item">
              <a
                class="nav-link active"
                aria-current="page"
                routerLink="/products"
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
                Blog
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Barcode Scanners</a></li>
                <li><a class="dropdown-item" href="#">Barcode Devices</a></li>
                <li>
                  <a class="dropdown-item" href="#">Barcode Printers</a>
                </li>

                <!-- <li><hr class="dropdown-divider" /></li> -->
                <li>
                  <a class="dropdown-item" href="#">Something else here</a>
                </li>
              </ul>
            </li>
            <li class="nav-item">
              <a class="nav-link active" routerLink="/services">Service</a>
            </li>
          </ul>
          <a routerLink="/contact" type="button" class="btn btn-dark">
            Contact US
          </a>

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

    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('Test App');
}
