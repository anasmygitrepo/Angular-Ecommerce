import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-adminpanel-product-view',
  templateUrl: './adminpanel-product-view.component.html',
  styleUrls: ['./adminpanel-product-view.component.css'],
})
export class AdminpanelProductViewComponent implements OnInit {
  products: product[];
  constructor(private service: ProductService, private route: Router) {}
  ngOnInit(): void {
    this.products = this.service.products;
  }
}
