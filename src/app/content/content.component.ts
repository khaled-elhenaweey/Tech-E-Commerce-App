import { ProductService } from './../admin-panel/admin-content/admin-product/product.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  constructor(private productService:ProductService) { }

  ngOnInit(): void { }

}
