import { Component, Input, OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { product } from 'src/app/Models/product';
import { ProductService } from 'src/app/services/product.service';
import { ProductDetailComponent } from '../product-detail/product-detail.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  searchtext: boolean = false;
  filterproduct: product[] = [];
  cart: any;
  products: product[] = [];
  Allproducts: any;
  AvailableProducts: any;
  OutOfStock: any;
  filtertext: string = 'all';
  @Input() searchproduct = '';
  SelectedProduct: product;

  constructor(private service: ProductService, private dialog: MatDialog) {}

  ngOnInit(): void {
    this.products = this.service.products;
    this.Allproducts = this.products.length;
    this.AvailableProducts = this.products.filter((x) => x.stock > 0).length;
    this.OutOfStock = this.products.filter((x) => x.stock <= 0).length;
  }

  getdiccountedprice() {
    this.products.forEach((x) => {
      if (x.discount) {
        return (x.price = (x.price * x.discount) / 100);
      } else {
        return null;
      }
    });
  }
  getstock() {
    this.products.forEach((x) => {
      if (x.stock > 0) {
        return 'only' + ' ' + x.stock + ' ' + 'product left hurry up';
      } else {
        return 'product is out of stock';
      }
    });
  }

  showout(data: any) {
    console.log(data.target.value);
  }

  addcart(productid: number) {
    this.filterproduct = this.service.products.filter((x) => x.id == productid);
    this.filterproduct.forEach((x) => {
      if (x.stock > 0 && x.AddTocart <= 10) x.AddTocart++;
      x.stock--;
    });
  }
  removecart(productid: any) {
    var cart: any;
    this.filterproduct = this.service.products.filter((x) => x.id == productid);
    this.filterproduct.forEach((x) => {
      if (x.AddTocart > 0) {
        x.AddTocart--;
        x.stock++;
      }
    });
  }
  Searchproduct(value: any) {
    this.searchproduct = value;
  }

  OnfilterChange(event: string) {
    this.filtertext = event;
  }

  openDialog(product: product) {
    const dialogRef = this.dialog.open(ProductDetailComponent, {
      data: {
        prod: product,
        message: 'Are you sure to delete this Employee ?',
        buttonText: {
          ok: 'Yes',
          cancel: 'No',
        },
      },
    });
  }
}
