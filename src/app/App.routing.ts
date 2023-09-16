import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CartdetailComponent } from './Container/cartdetail/cartdetail.component';
import { ProductListComponent } from './Container/product-list/product-list.component';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AboutComponent } from './Container/about/about.component';
import { ContactComponent } from './Container/contact/contact.component';
import { AdminpanelComponent } from './Container/adminpanel/adminpanel.component';
import { AddProductsComponent } from './Container/adminpanel/add-products/add-products.component';

export const Approute: Routes = [
  {
    path: '',
    component: MaincontainerComponent,
    // children: [
    //   {
    //     path: 'cart',
    //     loadChildren: () =>
    //       import('./Container/masterModule-route/master.module').then(
    //         (m) => m.MasterModule
    //       ),
    //   },
    // ],
  },
  // {
  //   path: '',
  //   redirectTo: '',
  //   pathMatch: 'full',
  // },
  {
    path: 'cart',
    component: CartdetailComponent,
  },
  {
    path: '#',
    component: MaincontainerComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'home',
    component: MaincontainerComponent,
  },
  {
    path: 'admin',
    component: AdminpanelComponent,
  },
  {
    path: 'admin/addproducts',
    component: AddProductsComponent,
  },
  {
    path: '**',
    component: PagenotfoundComponent,
  },
];

//localhost:4200/home......absalute path
//localhost:4200/home/about........relative path
