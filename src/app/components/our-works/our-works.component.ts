import { Component, OnInit } from '@angular/core';

export interface Work {
  type: string;
  date: string;
  title: string;
  imageUrl: string;
}

export const ourWorks: Work[] = [
  {
    type: 'Furniture',
    date: '23 September 2022',
    title: 'Begineer guide buying minimal sofa',
    imageUrl: '/assets/images/our-works/Card1.png',
  },
  {
    type: 'TABLE',
    date: '23 September 2022',
    title: 'Buying best minimal computer table',
    imageUrl: '/assets/images/our-works/Card2.png',
  },
  {
    type: 'Bench',
    date: '23 march 2022',
    title: 'How to choose best modern bench',
    imageUrl: '/assets/images/our-works/Card3.png',
  },
  {
    type: 'Chair',
    date: '23 march 2022',
    title: 'Best Summer Outfit Style in this Country',
    imageUrl: '/assets/images/our-works/Card4.png',
  },
];

@Component({
  selector: 'app-our-works',
  templateUrl: './our-works.component.html',
  styleUrls: ['./our-works.component.scss']
})
export class OurWorksComponent implements OnInit {
  public works = ourWorks;

  constructor() {
  }

  ngOnInit(): void {
  }

}
