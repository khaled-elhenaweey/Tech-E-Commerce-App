import { AppComponent } from './../app.component';
import { FooterComponent } from './../footer/footer.component';
import { HeaderComponent } from './../header/header.component';
import { AdminContentComponent } from './../admin-panel/admin-content/admin-content.component';
import { AdminMainComponent } from './../admin-panel/admin-main/admin-main.component';
import { AdminProductComponent } from './../admin-panel/admin-content/admin-product/admin-product.component';
import { PageNotFoundComponent } from './../page-not-found/page-not-found.component';
import { ContentComponent } from './../content/content.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// tslint:disable-next-line: quotemark
import { RouterModule , Routes } from "@angular/router";
import { AdminPanelComponent } from '../admin-panel/admin-panel.component';
import { UserPanelComponent } from '../user-panel/user-panel.component';
import { UserProductComponent } from '../user-product/user-product.component';

const routes: Routes = [
  { path: '',   redirectTo: '/Home', pathMatch: 'full' },
    {
     path: 'Home',
     component: UserPanelComponent,
      children: [
        {
          path: '',
          component: ContentComponent
        },
        {
          path: 'Product/:id',
          component: UserProductComponent
        },
      ]
     },

  {
    path: 'Admin',
    component: AdminMainComponent,
    children: [
      {
        path: '',
        component: AdminProductComponent,
      },
      {
          path: 'Product/:id',
          component: AdminProductComponent,
      }
  ]
},

  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
