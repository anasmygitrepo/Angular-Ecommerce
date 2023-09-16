import {
  FacebookLoginProvider,
  SocialAuthService,
  SocialUser,
} from '@abacritt/angularx-social-login';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './services/users.service';
import { User } from './Models/User';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'Ecommerce';

  user: any;
  loggedIn: boolean;
  Users: User[] = [];
  username1: any;
  @ViewChild(HeaderComponent) HeaderComponent: HeaderComponent;
  constructor(
    private authService: SocialAuthService,
    private route: Router,
    private userservice: UserService
  ) {}

  ngOnInit() {
    this.Users = this.userservice.users;
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = user != null;
    });
    let currentuser = localStorage.getItem('user');

    if (currentuser != null) {
      if (currentuser == 'admin') {
        this.loggedIn = true;
        this.route.navigate(['admin']);
      } else {
        this.loggedIn = true;
      }
    }
  }
  signOut(): void {
    this.authService.signOut();
  }
  login(username: any, password: any) {
    this.Users.forEach((x) => {
      if (x.name == username && x.password == password) {
        this.username1 = username;
        if (username == 'admin') {
          localStorage.setItem('user', username);
          this.loggedIn = true;
          this.route.navigate(['admin']);
        } else {
          this.loggedIn = true;
          localStorage.setItem('user', username);
        }
      }
    });
  }

  ngDoCheck() {
    this.username1 = localStorage.getItem('user');
  }
}
