import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  Products: Product[] =[
  new Product('P01','Hat',100,30,0.2),
  new Product('P02','T-Shirt',100,50,0.15),
  new Product('P03','Jearn',300,70,0.1)

  ]

  constructor() { }

  ngOnInit() {
  }

}
