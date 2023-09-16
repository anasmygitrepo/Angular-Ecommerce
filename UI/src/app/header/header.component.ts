import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { product } from '../Models/product';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  @Input() CartProducts: product[] = [];
  cart: product[];
  currentUserCart: product[];
  Actualcartcount: boolean = false;
  login: boolean;
  User: Observable<any>;
  user: any;
  @Input() currentuser: string = '';
  username: string;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit() {
    this.route.queryParamMap.subscribe((params) => {});
    this.user = localStorage.getItem('user');
    this.username = this.user;
    if (this.user != null) {
      this.login = true;
    }
  }

  ngDoCheck(change: SimpleChanges) {
    if (localStorage.getItem('user') != null) {
      this.login = true;
      this.user = localStorage.getItem('user');
      this.username = this.user;
    }

    if (localStorage.getItem('cartproducts')) {
      this.Actualcartcount = true;
      this.cart = JSON.parse(localStorage.getItem('cartproducts'));
      this.currentUserCart = this.cart.filter((x) => x.user == this.user);
    }
  }
  logouts() {
    localStorage.removeItem('user');
    this.login = false;
    this.router.navigate(['home']);
  }
}
