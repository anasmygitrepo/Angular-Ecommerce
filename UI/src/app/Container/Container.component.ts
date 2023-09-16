import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { filter } from 'rxjs';
import { product } from '../Models/product';
import { ProductService } from '../services/product.service';
import { ProductListComponent } from './product-list/product-list.component';

@Component({
  selector: 'app-container',
  templateUrl: './Container.component.html',
  styleUrls: ['./Container.component.css'],
})
export class ContainerComponent implements OnInit {
  serchvalue: string = '';
  @ViewChild(ProductListComponent) ProductListComponent: ProductListComponent;
  CartProducts: product[] = [];
  ngOnInit(): void {}
  search(value: string) {
    this.serchvalue = value;
  }
  GetCart(event: any) {
    this.CartProducts = event;
  }
}
