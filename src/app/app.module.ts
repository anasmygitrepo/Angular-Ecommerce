import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { TopmenuComponent } from './header/topmenu/topmenu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SearchComponent } from './Container/search/search.component';
import { ProductListComponent } from './Container/product-list/product-list.component';
import { ProductComponent } from './Container/product-list/product/product.component';
import { FiltterComponent } from './Container/product-list/filtter/filtter.component';
import { ProductDetailComponent } from './Container/product-detail/product-detail.component';
import { FutureProductsComponent } from './Container/future-products/future-products.component';
import { SetbackgroundDirective } from './Directivs/setbackground.directive';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { HostListnerDirectiveDirective } from './Directivs/host-listner-directive.directive';
import { CartdetailComponent } from './Container/cartdetail/cartdetail.component';
import { RouterModule } from '@angular/router';
import { Approute } from './App.routing';
import { MaincontainerComponent } from './maincontainer/maincontainer.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

import { ContainerComponent } from './Container/Container.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AsyncPipe, NgFor } from '@angular/common';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { OutofillsearchComponent } from './outofillsearch/outofillsearch.component';
import { MatCardModule } from '@angular/material/card';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {
  SocialLoginModule,
  SocialAuthServiceConfig,
} from '@abacritt/angularx-social-login';
import {
  GoogleLoginProvider,
  FacebookLoginProvider,
} from '@abacritt/angularx-social-login';
import { ContactComponent } from './Container/contact/contact.component';
import { AboutComponent } from './Container/about/about.component';
import { AdminpanelComponent } from './Container/adminpanel/adminpanel.component';
import { AdminpanelProductViewComponent } from './Container/adminpanel/adminpanel-product-view/adminpanel-product-view.component';
import { AddProductsComponent } from './Container/adminpanel/add-products/add-products.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TopmenuComponent,
    ContainerComponent,
    SearchComponent,
    ProductListComponent,
    ProductComponent,
    FiltterComponent,
    ProductDetailComponent,
    FutureProductsComponent,
    SetbackgroundDirective,
    HostListnerDirectiveDirective,
    CartdetailComponent,
    MaincontainerComponent,
    PagenotfoundComponent,
    ContactComponent,
    AboutComponent,
    AdminpanelComponent,
    OutofillsearchComponent,
    AdminpanelProductViewComponent,
    AddProductsComponent,
  ],
  imports: [
    NgMultiSelectDropDownModule.forRoot(),
    MatCardModule,
    SocialLoginModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    ReactiveFormsModule,
    NgFor,
    AsyncPipe,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    RouterModule.forRoot(Approute),
  ],
  providers: [
    {
      provide: 'SocialAuthServiceConfig',
      useValue: {
        autoLogin: false,
        providers: [
          {
            id: GoogleLoginProvider.PROVIDER_ID,
            provider: new GoogleLoginProvider(
              '825406074854-em3h5145crkvhhd9ke91qg4lhi32j65p.apps.googleusercontent.com'
            ),
          },
          {
            id: FacebookLoginProvider.PROVIDER_ID,
            provider: new FacebookLoginProvider('clientId'),
          },
        ],
        onError: (err) => {
          console.error(err);
        },
      } as SocialAuthServiceConfig,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
