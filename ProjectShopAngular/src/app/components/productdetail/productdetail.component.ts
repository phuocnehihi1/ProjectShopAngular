
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/common/product';
import { Form, NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {

  product: Product;
  constructor() {
    // Khỏi tạo class Product
    this.product = new Product('','',0,0,0);
  }

  changeDetail(form:NgForm){
    console.log(form.value);
    this.product.productCode = form.value.productCode;
    this.product.productName = form.value.productName;
    this.product.productQuatiy = form.value.productQuatity;
    this.product.productPrice =  form.value.productPrice;
    this.product.productDiscount = form.value.productDiscount;
  }

  ngOnInit() {
  }

}
