import { provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from '@angular/router';
import { bootstrapApplication } from '@angular/platform-browser';
import { App } from './app/app';
import routeConfig from './app/app.routes';

bootstrapApplication(App, {
  providers: [provideZoneChangeDetection(),provideRouter(routeConfig)],
}).catch((err) => console.error(err));
