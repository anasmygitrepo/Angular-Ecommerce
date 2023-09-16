import {
  Component,
  ElementRef,
  EventEmitter,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css'],
})
export class ProductDetailComponent implements OnInit {
  @Input() selectedproduct: product;
  showproduct: boolean;
  product: product;
  SavedCART: any[];
  CartProducts: product[] = [];
  currentuser: any;

  @Output() Cart: EventEmitter<any> = new EventEmitter<any>();

  constructor(private el: ElementRef, private route: Router) {}
  ngOnInit(): void {
    this.currentuser = localStorage.getItem('user');
  }

  // constructor(
  //   @Inject(MAT_DIALOG_DATA) private data: any,
  //   private dialogRef: MatDialogRef<ProductDetailComponent>
  // ) {
  //   // this.selectedproduct = data.prod;
  //   // console.log(data);
  // }

  close() {
    this.showproduct = false;
  }

  ngOnChanges() {
    if (localStorage.getItem('cartproducts') != null) {
      this.CartProducts = JSON.parse(localStorage.getItem('cartproducts'));
    }
    this.product = this.selectedproduct;
    this.showproduct = true;
  }
  AddTocart(products: any) {
    products.user = this.currentuser;
    const obj = products;
    if (products != null) {
      this.CartProducts.push(obj);
    }

    setTimeout(() => {
      localStorage.setItem('cartproducts', JSON.stringify(this.CartProducts));
    }, 2000);

    this.showproduct = false;
  }
  ClearCart() {
    let localData = localStorage.getItem('cartproducts');
    let newList = JSON.parse(localData);
    let index = newList.findIndex((item) => item.user === this.currentuser);
    newList.splice(index, 1);
    localStorage.setItem('cartproducts', JSON.stringify(newList));
    this.showproduct = false;
  }
}
