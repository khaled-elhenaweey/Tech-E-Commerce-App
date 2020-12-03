import { Product } from './../../admin-panel/admin-content/admin-product/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-product-main',
  templateUrl: './user-product-main.component.html',
  styleUrls: ['./user-product-main.component.scss']
})
export class UserProductMainComponent implements OnInit {

  product:Product
  productId:number=0;
  constructor(  private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {
         this.productId = params['id'];
      }
   );

    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    this.product = products.find(e=>e.productId == this.productId);
    console.log(this.product);
  }

}
