import { Product } from './../../admin-panel/admin-content/admin-product/Product';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-user-product-main',
  templateUrl: './user-product-main.component.html',
  styleUrls: ['./user-product-main.component.scss']
})
export class UserProductMainComponent implements OnInit {

  products: Product[];
  product: Product
  productId: number = 0;
  // productName:string;
  // qty:number;
  // productPrice:number;
  // description:string;

  constructor(  private route: ActivatedRoute, private router: Router) { }
  public route3(){

    this.router.navigate(['/Home']);
  }
  public route4(id:number){
    localStorage.setItem("id",id.toString());
    this.router.navigate(['/Admin/Product']);
  }
  ngOnInit(): void {

    this.route.params.subscribe(
      (params: Params) => {
         this.productId = params['id'];
      }
   );

    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    this.product = products.find(e => e.productId == this.productId);
    this.products=products;
    console.log(this.product);
  }

  async deleteProduct(id: Number): Promise<void> {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then(async (result) => {
      if (result.isConfirmed) {
        let stringProducts=localStorage.getItem("products");
        let products=<Product[]>JSON.parse(stringProducts);
        products = products.filter(item => item.productId != id);
        this.products = products;
        localStorage.setItem("products",JSON.stringify(products));

        Swal.fire(
          'Deleted!',
          'Your file has been deleted.',
          'success'
        );
      }
    });
}
}
