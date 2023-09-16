import { Component, Input, OnInit } from '@angular/core';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  ngOnInit(): void {}

  @Input() products: product[] = [];
  @Input() product: {
    id: number;
    name: string;
    description: string;
    gender: string;
    category: string;
    size: number[];
    colors: string[];
    is_in_inventory: boolean;
    price: number;
    discount?: number;
    stock: number;
    image: string;
    AddTocart: number;
    brand: string;
  };
}
