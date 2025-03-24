import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

// Define the routes for the application

export const routes: Routes = [
  {
    path: '',
    component: ProductListComponent,
    title: 'Product List page'
  },
{
  path: 'product/add',
  component: ProductAddComponent,
  title: 'Add Product page'
},
  {
    path: 'product/details',
    component: ProductDetailsComponent,
    title: 'Product Details page'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Page Not Found page'
  }
];
