import {Component, Input, OnInit} from '@angular/core';

export interface Product {
  title: string;
  imgPath: string;
  type: string;
  priceDiscount: string;
  priceCurrent: string;
}

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() public product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

}
