import { Component } from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {products} from '../../assets/products.json';
import {Product} from '../types/product';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : Array<Product>  = products;
}

