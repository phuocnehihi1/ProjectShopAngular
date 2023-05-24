import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: Product[] =[
  new Product('P01','Hat'),
  new Product('P02','T-Shirt'),
  new Product('P03','Jearn')

  ]

  constructor() { }

  ngOnInit() {
  }

}
