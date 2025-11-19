import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Details } from './details/details';
import { Products } from './products/products';
import { Services } from './services/services';
import { Contact } from './contact/contact';

export const routeConfig: Routes = [
  {
    path: '',
    component: Home,
    title: 'Home Page',
  },
  {
    path: 'details',
    component: Details,
    title: 'Details Page',
  },
  {
    path: 'products',
    component: Products,
    title: 'Products Page',
  },
  {
    path: 'services',
    component: Services,
    title: 'Service Page',
  },
  {
    path: 'contact',
    component: Contact,
    title: 'Contact Page',
  },
];

export default routeConfig;
