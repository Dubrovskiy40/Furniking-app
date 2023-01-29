import { Component, OnInit } from '@angular/core';
import {Product} from "../../shared/product/product.component";

export const products: Product[] = [
  {
    title: 'Minimal LCD chair',
    imgPath: '/assets/images/products/product1.png',
    type: 'Chair',
    priceDiscount: '$180',
    priceCurrent: '$250',
  },
  {
    title: 'Modern Sofa',
    imgPath: '/assets/images/products/product2.png',
    type: 'sofa',
    priceDiscount: '$120',
    priceCurrent: '$150',
  },
  {
    title: 'Microfiber Sofa',
    imgPath: '/assets/images/products/product3.png',
    type: 'sofa',
    priceDiscount: '$130',
    priceCurrent: '$150',
  },
  {
    title: 'Wood Coffee Tables',
    imgPath: '/assets/images/products/product4.png',
    type: 'tabble',
    priceDiscount: '$100',
    priceCurrent: '$120',
  },
  {
    title: 'Acacia Wood Club Chairs',
    imgPath: '/assets/images/products/product5.png',
    type: 'Chair',
    priceDiscount: '$100',
    priceCurrent: '$120',
  },
  {
    title: 'Amalia Cowhide Bench',
    imgPath: '/assets/images/products/product6.png',
    type: 'Bench',
    priceDiscount: '$130',
    priceCurrent: '$150',
  },
  {
    title: 'Juno-Hinged Lid Storage',
    imgPath: '/assets/images/products/product7.png',
    type: 'Storage',
    priceDiscount: '$180',
    priceCurrent: '$250',
  },
  {
    title: 'Delicia 3 Piece Living Room',
    imgPath: '/assets/images/products/product8.png',
    type: 'Furniture',
    priceDiscount: '$120',
    priceCurrent: '$150',
  },
];

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.scss']
})
export class OurProductsComponent implements OnInit {
  public products: Product[] = products;

  constructor() { }

  ngOnInit(): void {
  }

}
