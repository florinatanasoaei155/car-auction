import { Component, OnInit } from '@angular/core';

interface Product {
  id?: number;
  columnId?: number;
  imgSrc: string;
  imgAlt: string;
  carName: string;
  views: number;
  location: string;
  oldPrice: number;
  currentPrice: number;
  date: string;
  year: number;
};

@Component({
  selector: 'app-page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.scss']
})
export class PageContentComponent implements OnInit {

  products: Product[] = [
    {
      id: 1,
      columnId: 1,
      imgSrc: 'assets/images/car-1@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 2,
      columnId: 2,
      imgSrc: 'assets/images/car-2@2x.png',
      carName: 'Toyota Camry XSE',
      imgAlt: 'Toyota Camry XSE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Dammam, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 3,
      columnId: 3,
      imgSrc: 'assets/images/car-3@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 8911,
      currentPrice: 10500,
      year: 2008
    },
    {
      id: 4,
      columnId: 1,
      imgSrc: 'assets/images/car-4@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 5,
      columnId: 2,
      imgSrc: 'assets/images/car-5@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 6,
      columnId: 3,
      imgSrc: 'assets/images/car-1@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 7,
      columnId: 1,
      imgSrc: 'assets/images/car-6@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 8,
      columnId: 2, 
      imgSrc: 'assets/images/car-1@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
    {
      id: 9,
      columnId: 3,
      imgSrc: 'assets/images/car-7@2x.png',
      carName: 'Toyota Camry SE',
      imgAlt: 'Toyota Camry SE',
      date: 'Thursday, 12 Dec 2019 - 15:10',
      views: 7732,
      location: "Riyadh Yard, Saudi Arabia",
      oldPrice: 23911,
      currentPrice: 23911,
      year: 2019
    },
  ];

  firstColumnProducts: Product[];
  secondColumnProducts: Product[];
  thirdColumnProducts: Product[];

  constructor() { }

  ngOnInit(): void {
    this.firstColumnProducts = this.products.filter( product => product.columnId === 1);
    this.secondColumnProducts = this.products.filter( product => product.columnId === 2);
    this.thirdColumnProducts = this.products.filter( product => product.columnId === 3);
  }

}
