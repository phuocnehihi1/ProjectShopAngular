export class Product {

  productCode:string;
  productName:string;
  productQuatiy:number;
  productPrice:number;
  productDiscount:number;
  productStar:number = 0



  constructor(productCode:string,productName:string,productQuatiy:number,productPrice:number,productDiscount:number){
      this.productCode = productCode;
      this.productName = productName;
      this.productQuatiy = productQuatiy;
      this.productPrice = productPrice;
      this.productDiscount = productDiscount;
  }

}

