export class Product {
  productId: number;
  productName: string;
  productPrice: number;
  qty: number;
  description: string;
  rate: number | null;
  img: string;


  // tslint:disable-next-line: max-line-length
  constructor(public _productId: number, public _productName: string, public _productPrice: number, public _qty: number, public _description: string) {
    this.productId = _productId;
    this.productName = _productName;
    this.qty = _qty;
    this.description = _description;
    // this.rate = _rate;
    this.productPrice = _productPrice;
  }
}


// export interface Product {
//   productId: number;
//   productName: string;
//   productPrice: number | null;
//   qty: number | null;
//   description: string;
//   rate: number | null;
//   categoryId: number | null;
//   reviews: Reviews[];
//   category: Category;
//   images: Image[];
// }
