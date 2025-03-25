import { Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

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
    path: 'details/:id',
    component: ProductDetailsComponent,
    title: 'Product Details page'
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart page'
  },
  {
    path:'login',
    component: LoginComponent,
    title: 'login page'
  },
  {
    path:'register',
    component: RegisterComponent,
    title: 'Registeration page'
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: '404 Page Not Found page'
  }
];
