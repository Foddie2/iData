import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Details } from './details/details';
import { Products } from './products/products';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact';
import { NotFound } from './not-found/not-found';

export const routeConfig: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'ScanGrid | capture Data at the Edge',
  },
  // Dynamic Route with parameter
  {
    path: 'details/:id',
    component: Details,
    title: 'Products',
  },
  {
    path: 'products',
    component: Products,
    title: 'Blog',
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'Services',
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'Contact Us',
  },

  {
    path: '**',
    component: NotFound,
    title: 'Page Not Found',
  },
];

export default routeConfig;
