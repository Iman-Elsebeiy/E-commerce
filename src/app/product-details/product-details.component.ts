import { Component, inject, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { products } from '../../assets/products.json';

@Component({
  selector: 'app-product-details',
  imports: [CommonModule],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.css'
})
export class ProductDetailsComponent {
  // activtedRoute = inject(ActivatedRoute);
  product: any = {};
  @Input() id: string=''
  ngOnInit() {
    // const params_id = this.activtedRoute.snapshot.params['id'];
    // this.product = products.find((product) => product.id === +params_id);
    // console.log(this.product);
    this.product = products.find((product) => product.id === +this.id);

  }
}
