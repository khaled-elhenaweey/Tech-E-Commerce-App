import { ProductService } from './product.service';
import { HttpClient} from '@angular/common/http';
import { Component, EventEmitter, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Product } from './Product';
import { Subject } from 'rxjs';
import { DataTableDirective } from 'angular-datatables';
import { FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { DomSanitizer } from '@angular/platform-browser';
import {  ActivatedRoute, Params, Router} from '@angular/router';
declare var $: any;
declare var jQuery: any;
(function () {
  'use strict';
  window.addEventListener('load', function () {
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    var forms = document.getElementsByClassName('needs-validation');
    // Loop over them and prevent submission
    var validation = Array.prototype.filter.call(forms, function (form) {
      form.addEventListener('submit', function (event) {
        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();
        }
        form.classList.add('was-validated');
      }, false);
    });
  }, false);
  $($.fn.dataTable.tables(true)).DataTable()
  .columns.adjust();
})();

@Component({
  selector: 'app-admin-product',
  templateUrl: './admin-product.component.html',
  styleUrls: ['./admin-product.component.scss']
})
export class AdminProductComponent implements OnInit, OnDestroy {

  url = "";
  @ViewChild(DataTableDirective, { static: false })
  dtElement: DataTableDirective;
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  uploadForm: FormGroup;
  file: string;
  myFile: string[] = [];
  data: Array<Object> = [{ id: 0, name: "name1" }, { id: 1, name: "name2" }];

  // tslint:disable-next-line: typedef
  products: Product[];
  product: Product;
  productId: number = 1;
  productName: string;
  productPrice: number;
  qty: number;
  description: string;
  rate: number | null;
  categoryId: number | null;
  selectedValue:number = 0;
  categorySelected: number;
  modifiedValue: number;
  public message: string;
  public progress: number;
  filesToUpload: File[] ;
  filesToConvert : any[] ;
  formData = new FormData();
  imageName: string;

  @Output() public onUploadFinished = new EventEmitter();

  constructor(private productSerivce: ProductService, private http: HttpClient, private sanitizer: DomSanitizer,private route: ActivatedRoute, private router: Router) {

  }
  public route5(id:number){
    localStorage.setItem("id",id.toString());
    this.router.navigate(['/Admin/Product']);
  }

  ngOnInit(): void {
      window.scrollTo(0, 0);
    this.dtOptions = {
      responsive: true,
      pagingType: 'full_numbers',
      pageLength: 10,
      autoWidth: true,

    };
    this.route.params.subscribe(
      (params: Params) => {
         this.productId = params['id'];
      }
    );
    console.log(this.productId);

    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    this.products=products;
    let editedProduct = products.find(e => e.productId == this.productId);
    console.log(editedProduct);

    this.productName=editedProduct.productName;
    this.productPrice=editedProduct.productPrice;
    this.qty=editedProduct.qty;
    this.description=editedProduct.description;
    $("#save").hide();
    $("#edit").show();

    this.dtTrigger.next();
  }

  public uploadFile = async (files) => {
    if (files.length === 0) {
      return;
    }
    console.log(files);
    this.filesToUpload = files;

    this.handleFileInput(files);
  }

  handleFileInput(files) {
    if (files) {
      var render = new FileReader();

      render.onload = (event: any) => {
        this.url=event.target.result;
      };

      render.readAsDataURL(files[0]);
      this.imageName = files[0].name;
    }
  }



  onFileSelect(event) {
    for (let i = 0; i < (event.target.files.length); i++) {
      this.file = event.target.files[i];
      this.myFile.push(event.target.files[i]);

    }
    console.log(this.myFile);
  }
  deleteImage(): void {
   this.url="";
  }
  deleteImageInEdit(indexElement): void {
  this.filesToConvert.splice(indexElement, 1);
  }

  ngOnDestroy(): void {
    this.dtTrigger.unsubscribe();
  }

  async saveProduct(): Promise<void> {
    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    let productName = this.productName;
    let productPrice = this.productPrice;
    let qty = this.qty;
    let description = this.description;
    let newProduct = new Product(this.productId, productName, productPrice, qty, description);
    newProduct.img = this.url;
    products.push(newProduct);
    localStorage.setItem("products",JSON.stringify(products));

    Swal.fire(
      'Product Saved Successfully',
      '',
      'success'
    );
    this.productId++;
    this.products = products;

    this.resetControls();
  }
  async getProductbyid(product: Product){
    this.productName = product.productName;
    this.productId = product.productId;
    this.productPrice = product.productPrice;
    this.qty = product.qty;
    this.description = product.description;

    $("#save").hide();
    $("#edit").show();
  }
  async saveAfterEditProduct(): Promise<void> {
    let stringProducts=localStorage.getItem("products");
    let products=<Product[]>JSON.parse(stringProducts);
    let editedProduct = products.find(e=>e.productId==this.productId);
    editedProduct.productName=this.productName;
    editedProduct.productPrice=this.productPrice;
    editedProduct.qty=this.qty;
    editedProduct.description=this.description;
    console.log(editedProduct);
    Swal.fire(
      'Product Saved Successfully',
      '',
      'success'
    );
    this.products = products;
    localStorage.setItem("products",JSON.stringify(products));

    this.productId = 0;
    $("#edit").hide();
    $("#save").show();
    this.resetControls();
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
  resetControls(): void {
    this.productName = "";
    this.productPrice = null;
    this.qty = null ;
    this.description = "";
    this.categoryId = null ;
    this.url = "";
  }

}
