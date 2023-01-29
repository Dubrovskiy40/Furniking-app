import { Component, OnInit } from '@angular/core';

export interface Review {
  autor: string;
  text: string;
  position: string;
  imgPath: string;
}

export const reviews: Review[] = [
  {
    autor: 'Angelina Joly1',
    text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.',
    position: 'Co-founder',
    imgPath: 'avatar',
  },
  {
    autor: 'Angelina Joly2',
    text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.',
    position: 'Co-founder',
    imgPath: 'avatar',
  },
  {
    autor: 'Angelina Joly3',
    text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.',
    position: 'Co-founder',
    imgPath: 'avatar',
  },
  {
    autor: 'Angelina Joly4',
    text: 'I like Furniking.com and as compared to other company it\'s polices and customers support is very good easy to reach., also many time they unable to delivered. The ultricies are pregnant while the quis is suspended. Risus commodo viverra maecenas accumsan lacus vel facilisist amet.',
    position: 'Co-founder',
    imgPath: 'avatar',
  },
];

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.scss']
})
export class ReviewsComponent implements OnInit {
  public reviews = reviews;
  public effect = 'scrollx';

  constructor() { }

  ngOnInit(): void {
  }

}
