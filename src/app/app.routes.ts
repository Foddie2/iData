import { Routes } from '@angular/router';
import { HomeComponent } from './home/home';
import { Details } from './details/details';
import { Products } from './products/products';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact';
import { NotFound } from './not-found/not-found';
import { BlogComponent } from './blog/blog';

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

  // Static route for blog listing
  {
    path: 'blog',
    component: BlogComponent,
    title: 'ScanGrid | Insights',
  },

  // Dynamic route for blog post details
  {
    path: 'blog/:id',
    loadComponent: () =>
      import('./blog-detail/blog-detail').then((m) => m.BlogDetailComponent),
    title: 'ScanGrid | Article Details',
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
