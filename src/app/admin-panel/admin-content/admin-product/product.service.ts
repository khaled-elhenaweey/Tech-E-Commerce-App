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
      let product1=new Product(100,"camera",5300,5," Black Tell distinctive stories with your photography. This beginner’s with EF-S 18-55mm f/3.5-5.6 III Lens intuitively creates stand-out photos and Full HD movies full of color and detail – offering partial and full manual photographic control. ");
      product1.img="../../../assets/img/camera.png";
      this.products.push(product1);

      let product2=new Product(101,"Game Board",800,10,"Brand : Sony,Compatible with : PlayStation 4,Accessory Type : Controllers,Are batteries needed to power the product ,Is this a Dangerous Good or a Hazardous Material, Substance or Waste that is regulated.");
      product2.img="../../../assets/img/s2_playstation.png";
      this.products.push(product2);


      let product3=new Product(102,"laptop",18800,2,"PBS22E-002001AR,10th Generation Intel® Core™ i5-10210U Processor 8,192 MB RAM 1 TB Hard Disk NVIDIA® GeForce® MX250 15.6 Inch Display Size Black Texture Color 1 Year EMEA Warranty");
      product3.img="../../../assets/img/s1-laptop.png";
      this.products.push(product3);


      let product4=new Product(103,"drone",850,6,"Explore, photograph and film the underwater world from topside with the Titan Underwater ROV (492' Depth Rating). This underwater drone's camera is equipped with a 1/2.5 sensor to capture 8MP still photos and 4K video");
      product4.img="../../../assets/img/s1-drone.png";
      this.products.push(product4);

      let product5=new Product(104,"keyboard",50,25,"The Wireless Desktop 900 Keyboard and Mouse from Microsoft features a quiet-touch keyboard and a full-sized ambidextrous mouse. The keyboard features easy-access hotkeys for commonly used Windows functions, and AES");
      product5.img="../../../assets/img/s2-keyboard.png";
      this.products.push(product5);

      let product6=new Product(105,"USB",344,30,"Model Number : SDDDC3-128G-G46,External Product ID : 619659177201,Brand : Sandisk, External Product ID Type : EAN-13");
      product6.img="../../../assets/img/s1-usb.png";
      this.products.push(product6);

      let product7=new Product(106,"Screen",700,2,"screen with elegant design with a wide angle of one hundred and seventy-eight degrees, and the level of curvature with a curved screen and an equal distance for your eyes to enjoy comfortable viewing");
      product7.img="../../../assets/img/s2-screen.png";
      this.products.push(product7);

      let product8=new Product(107,"Tablet",600,15,"HUAWEI Kirin 810, RAM: 4 GB, Storage: 64 GB, Rear camera: 8 megapixel, Front camera: 8 megapixel");
      product8.img="../../../assets/img/s2-tablet.png";
      this.products.push(product8);

      let product9=new Product(108,"Speaker",900,36,"Control and Connection Specifications,Bluetooth version: 4.2 Battery Battery capacity: 4.800 mAh Charging time: 2.5 hours Features Auto power off: Yes Bluetooth: Yes Waterproof: Yes");
      product9.img="../../../assets/img/s1-speaker.png";
      this.products.push(product9);
      let product10=new Product(109,"Headphones",300,18,"professional production experience and strong technical force, is outstanding in the circle of gaming peripherals, devoting whole life to provide highest standard and professional gaming accessories.");
      product10.img="../../../assets/img/headphones.png";
      this.products.push(product10);
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
