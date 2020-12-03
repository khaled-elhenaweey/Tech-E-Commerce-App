import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { OwlModule } from 'ngx-owl-carousel';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContentComponent } from './content/content.component';
import { CarouselComponent } from './content/carousel/carousel.component';
import { CategoryCardComponent } from './content/category-card/category-card.component';
import { BestSellerComponent } from './content/best-seller/best-seller.component';
import { BestSeller2Component } from './content/best-seller2/best-seller2.component';
import { WeekOfferComponent } from './content/week-offer/week-offer.component';
import { FormsModule } from '@angular/forms';
// tslint:disable-next-line: quotemark
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AdminPanelComponent } from './admin-panel/admin-panel.component';
import { AdminMainComponent } from './admin-panel/admin-main/admin-main.component';
import { AdminContentComponent } from './admin-panel/admin-content/admin-content.component';
import { AdminProductComponent } from './admin-panel/admin-content/admin-product/admin-product.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxPopper } from 'angular-popper';
import { UserPanelComponent } from './user-panel/user-panel.component';
import { ScrollService } from "../app/_services/scroll.service";
import { UserProductComponent } from './user-product/user-product.component';
import { UserProductMainComponent } from './user-product/user-product-main/user-product-main.component';
import { UserProductCommentComponent } from './user-product/user-product-comment/user-product-comment.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContentComponent,
    CarouselComponent,
    CategoryCardComponent,
    BestSellerComponent,
    BestSeller2Component,
    WeekOfferComponent,
    PageNotFoundComponent,
    AdminPanelComponent,
    AdminMainComponent,
    AdminContentComponent,
    AdminProductComponent,
    UserPanelComponent,
    UserProductComponent,
    UserProductMainComponent,
    UserProductCommentComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    CarouselModule,
    OwlModule,
    FormsModule,
    AppRoutingModule,
    DataTablesModule.forRoot(),
    NgxPopper


  ],
  providers: [ScrollService],
  bootstrap: [AppComponent]
})
export class AppModule { }
