import { Injectable } from '@angular/core';
import {Category} from '../product-component/product-component';
import {ProductModel} from "../models/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  products = [new ProductModel('Orange', 'Oranges from India', 45, false, Category.Fruits, 10, 10),
              new ProductModel('Banana', 'Bananas from Africa', 38, true, Category.Fruits, 20, 20),
              new ProductModel('Potato', 'Potato from Ukraine', 15, false, Category.Vegetables, 30, 30),
              new ProductModel('Nut', 'Nuts from squirrel', 150, false, Category.Nuts, 40, 40),
              new ProductModel('Apple Juice', 'Apple Juice from grammy garden', 45, true, Category.Fruits, 50,50)
  ];

  constructor() { }

  getProductList(): Array<ProductModel> {
    return this.products;
  }
}
