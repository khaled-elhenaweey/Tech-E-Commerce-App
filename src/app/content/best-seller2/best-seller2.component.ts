import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import 'owl.carousel';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Product } from '../../../app/admin-panel/admin-content/admin-product/Product';

@Component({
  selector: 'app-best-seller2',
  templateUrl: './best-seller2.component.html',
  styleUrls: ['./best-seller2.component.scss']
})
export class BestSeller2Component implements OnInit {
  products:Product[]=[];
  constructor(private router: Router) { }
  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 4000,
    autoplayHoverPause: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsData: true,
    dotsEach: true,
    navSpeed: 4000,
    fluidSpeed: true,
    smartSpeed: 2000,
    // navText: ['Previous', 'Next'],
    responsive: {
      0: {
        items: 1

          },
      400: {
        items: 1
      },
      540:{
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 3,
       },
       1223: {
        items: 4,
       }
    },
    // nav: true
  };
  public route2(id:number){
    localStorage.setItem("id",id.toString());
    this.router.navigate(['/Home/Product']);
  }
  ngOnInit(): void{
    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    this.products=products;
  }
}
