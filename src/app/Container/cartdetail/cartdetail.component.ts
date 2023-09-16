import {
  Component,
  DoCheck,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { product } from 'src/app/Models/product';

@Component({
  selector: 'app-cartdetail',
  templateUrl: './cartdetail.component.html',
  styleUrls: ['./cartdetail.component.css'],
})
export class CartdetailComponent implements OnInit, OnChanges {
  products: product[];
  currentuserproducts: product[] = [];
  cartlength: any;
  Totalprice: number = 0;
  Incrimentprice: number = 0;
  productcount: number = 1;
  cartcountchngeproduct: product[];
  currentuser: any;
  ngOnInit(): void {
    this.currentuser = localStorage.getItem('user');
    this.products = JSON.parse(localStorage.getItem('cartproducts'));
    this.currentuserproducts = this.products.filter(
      (x) => x.user == this.currentuser
    );
    this.cartlength = this.currentuserproducts.length;

    this.currentuserproducts.forEach((x) => {
      this.Totalprice = this.Totalprice + x.price;
    });
  }
  ngOnChanges(change: SimpleChanges) {}

  clearcart() {
    localStorage.clear();
  }
  deleteCartItem(id: any) {
    let localData = localStorage.getItem('cartproducts');
    let newList = JSON.parse(localData);
    let index = newList.findIndex(
      (item) => item.id == id && item.user === this.currentuser
    );
    newList.splice(index, 1);
    localStorage.setItem('cartproducts', JSON.stringify(newList));
    this.products = JSON.parse(localStorage.getItem('cartproducts'));
    this.currentuserproducts = this.products.filter(
      (x) => x.user == this.currentuser
    );
  }

  addcount(price: number, id: number) {
    if (this.productcount < 10) {
      this.products.forEach((x) => {
        if (x.id == id) {
          this.Totalprice = this.Totalprice + price;
        }
      });

      if (this.productcount < 10) {
        this.cartcountchngeproduct = this.products.filter((x) => x.id == id);
        this.cartcountchngeproduct.forEach((x) => {
          x.AddTocart++;
        });
      }
      this.productcount++;
    }
  }
  reducecount(price: number, id: number) {
    if (this.productcount > 1) {
      this.products.forEach((x) => {
        if (x.id == id) {
          this.Totalprice = this.Totalprice - price;
        }
      });
      if (this.productcount > 1) {
        this.cartcountchngeproduct = this.products.filter((x) => x.id == id);
        this.cartcountchngeproduct.forEach((x) => {
          x.AddTocart--;
        });
        this.productcount--;
      }
    }
  }
}
