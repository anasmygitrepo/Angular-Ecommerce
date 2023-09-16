import { Injectable } from '@angular/core';
import { product } from '../Models/product';
import { User } from '../Models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor() {}

  users: User[] = [
    { id: 1, name: 'ameen', password: 'ameen121', gender: 'male' },
    { id: 2, name: 'anas', password: 'anas121', gender: 'male' },
    { id: 3, name: 'admin', password: 'admin121', gender: 'male' },
    { id: 4, name: 'ayshu', password: 'ayshu121', gender: 'female' },
  ];
}
