import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  @Input() imgSrc: string;
  @Input() imgAlt: string;
  @Input() carName: string;
  @Input() views: number;
  @Input() location: string;
  @Input() oldPrice: number;
  @Input() currentPrice: number;
  @Input() date: Date;
  @Input() year: string;

  constructor() { }

  ngOnInit(): void {
  }

}
