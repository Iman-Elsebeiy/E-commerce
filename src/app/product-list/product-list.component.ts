import { Component } from '@angular/core';
import {ProductCardComponent} from '../product-card/product-card.component';
import {products} from '../../assets/products.json';


@Component({
  selector: 'app-product-list',
  imports: [ProductCardComponent],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products : any[] = products;
}

