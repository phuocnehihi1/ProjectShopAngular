export class Product {

  productCode:string;
  productName:string;
  productQuatity:number;
  productPrice:number;
  productDiscount:number;

  constructor(productCode:string,productName:string,productQuatity:number,productPrice:number,productDiscount:number){
      this.productCode = productCode;
      this.productName = productName;
      this.productQuatity = productQuatity;
      this.productPrice = productPrice;
      this.productDiscount = productDiscount;

  }

}

