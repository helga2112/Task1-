import { Injectable } from '@angular/core';
import {Category} from '../product-component/product-component.component';
import {TOProduct} from '../TypeObjects/TOProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  products = [{name : 'Orange', description: 'Oranges from India', price: 45, isAvailable: true, category: Category.Fruits},
    {name : 'Banana', description: 'Bananas from Africa', price: 38, isAvailable: true, category: Category.Fruits},
    {name : 'Potato', description: 'Potato from Ukraine', price: 15, isAvailable: true, category: Category.Vegetables},
    {name : 'Nut', description: 'Nuts from squirrel', price: 150, isAvailable: true, category: Category.Nuts},
    {name : 'Apple Juice', description: 'Apple Juice from grammy garden', price: 45, isAvailable: true, category: Category.Fruits}
  ];

  constructor() { }

  getProductList(): Array<TOProduct> {
    return this.products;
  }
}
