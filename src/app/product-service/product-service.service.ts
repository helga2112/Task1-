import { Injectable } from '@angular/core';
import {Category} from '../product-component/product-component.component';
import {IProductModel} from '../models/IProductModel';
import {ProductModel} from "../models/ProductModel";

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  products = [new ProductModel('Orange', 'Oranges from India', 45, true, Category.Fruits),
              new ProductModel('Banana', 'Bananas from Africa', 38, true, Category.Fruits),
              new ProductModel('Potato', 'Potato from Ukraine', 15, true, Category.Vegetables),
              new ProductModel('Nut', 'Nuts from squirrel', 150, true, Category.Nuts),
              new ProductModel('Apple Juice', 'Apple Juice from grammy garden', 45, true, Category.Fruits)
  ];

  constructor() { }

  getProductList(): Array<IProductModel> {
    return this.products;
  }
}
