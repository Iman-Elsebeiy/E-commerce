import { Component, inject, Input } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent {
  @Input() product: any;

router= inject(Router);


  getStars(rating: number): string[] {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return [
      ...Array(fullStars).fill('fa fa-star'),
      ...(halfStar ? ['fa fa-star-half-alt'] : []),
      ...Array(emptyStars).fill('fa fa-star-o')
    ];
  }


  View (){
  this.router.navigate(['/details', this.product.id]);
}
}
