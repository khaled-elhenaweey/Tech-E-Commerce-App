import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  baseUrl: string;
  products:Product[]=[];
  constructor(private http: HttpClient) {
    this.baseUrl = '';

    if(localStorage.getItem("products")==null){
      let product1=new Product(100,"camera",100,10,"New Cam");
      product1.img="../../../assets/img/camera.png";
      this.products.push(product1);

      let product2=new Product(101,"s2_playstation",100,10,"New Cam");
      product2.img="../../../assets/img/s2_playstation.png";
      this.products.push(product2);


      let product3=new Product(102,"laptop",100,10,"New Cam");
      product3.img="../../../assets/img/s1-laptop.png";
      this.products.push(product3);


      let product4=new Product(103,"drone",100,10,"New Cam");
      product4.img="../../../assets/img/s1-drone.png";
      this.products.push(product4);

      let product5=new Product(104,"keyboard",100,10,"New Cam");
      product5.img="../../../assets/img/s2-keyboard.png";
      this.products.push(product5);
      localStorage.setItem("products",JSON.stringify(this.products));
    }
  }
  async getProduct(): Promise<any> {
    return await this.http.get<Product[]>(this.baseUrl).toPromise();
  }
  async getProductById(id:number): Promise<any> {
    return await this.http.get<Product[]>(this.baseUrl + "/" + id).toPromise();
  }
  async saveProduct(newProduct: Product): Promise<any> {
    return await this.http.post<Product>(this.baseUrl, newProduct).toPromise();
  }
  async saveImages(files: FormData): Promise<any> {
    return await this.http.post(this.baseUrl, files).toPromise();
  }
  async deleteProduct(id: Number): Promise<any> {
    return await this.http.delete(this.baseUrl + "/" + id).toPromise();
  }
  async editProduct(editedProduct: Product, id: number): Promise<any> {
    return await this.http.put<Product>(this.baseUrl + "/" + id, editedProduct).toPromise();
  }
}
