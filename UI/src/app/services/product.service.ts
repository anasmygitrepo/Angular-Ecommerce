import { Injectable } from '@angular/core';
import { product } from '../Models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  products: product[] = [
    {
      id: 1,
      name: 'iphon14',
      price: 100000,
      discount: 2000,
      colors: ['black', 'white', 'red'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'mobail',
      is_in_inventory: false,
      stock: 0,
      image: 'assets/images/iphone.jpg',
      AddTocart: 1,
      brand: 'ipone',
    },
    {
      id: 2,
      name: 'jogger',
      price: 70000,
      discount: 1000,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'shoe',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/joger.jpg',
      AddTocart: 1,
      brand: 'jorden',
    },
    {
      id: 3,
      name: 'nikemax',
      price: 10000,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'jogger',
      is_in_inventory: false,
      stock: 0,
      image: 'assets/images/nike1.jpg',
      AddTocart: 1,
      brand: 'Nike',
    },
    {
      id: 4,
      name: 'nikencdight',
      price: 1000,
      discount: 100,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'jogger',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/nike.jpg',
      AddTocart: 1,
      brand: 'Nike',
    },
    {
      id: 5,
      name: 'addidas',
      price: 1000,
      colors: ['balck', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'jogger',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/adi.jpg',
      AddTocart: 1,
      brand: 'adiddas',
    },
    {
      id: 6,
      name: 'Addidas',
      price: 1000,
      discount: 100,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'jogger',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/adiddas.jpg',
      AddTocart: 1,
      brand: 'adiddas',
    },
    {
      id: 6,
      name: 'Addidas',
      price: 1000,
      discount: 100,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'jogger',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/adiddas.jpg',
      AddTocart: 1,
      brand: 'adiddas',
    },
    {
      id: 1,
      name: 'iphon14',
      price: 100000,
      discount: 2000,
      colors: ['black', 'white', 'red'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'mobail',
      is_in_inventory: false,
      stock: 0,
      image: 'assets/images/iphone.jpg',
      AddTocart: 1,
      brand: 'ipone',
    },
    {
      id: 2,
      name: 'jogger',
      price: 70000,
      discount: 1000,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'shoe',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/joger.jpg',
      AddTocart: 1,
      brand: 'jorden',
    },
    {
      id: 1,
      name: 'iphon14',
      price: 100000,
      discount: 2000,
      colors: ['black', 'white', 'red'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'mobail',
      is_in_inventory: false,
      stock: 0,
      image: 'assets/images/iphone.jpg',
      AddTocart: 1,
      brand: 'ipone',
    },
    {
      id: 2,
      name: 'jogger',
      price: 70000,
      discount: 1000,
      colors: ['black', 'white'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'shoe',
      is_in_inventory: true,
      stock: 8,
      image: 'assets/images/joger.jpg',
      AddTocart: 1,
      brand: 'jorden',
    },
    {
      id: 1,
      name: 'iphon14',
      price: 100000,
      discount: 2000,
      colors: ['black', 'white', 'red'],
      size: [5, 6, 7, 8, 9],
      gender: 'male',
      description: 'good product',
      category: 'mobail',
      is_in_inventory: false,
      stock: 0,
      image: 'assets/images/iphone.jpg',
      AddTocart: 1,
      brand: 'ipone',
    },
  ];
}
