import { Injectable } from '@angular/core';
import {Category} from '../product-component/product-component';
import {ProductModel} from '../models/ProductModel';
import { IProductModel } from '../models/IProductModel';

@Injectable({
  providedIn: 'root'
})
export class GetProductService {

  products: Array<ProductModel> = [new ProductModel('Orange', 'Oranges from India', 45.258, false, Category.Fruits, 10, 10),
              new ProductModel('Banana', 'Bananas from Africa', 38.474, true, Category.Fruits, 20, 20),
              new ProductModel('Potato', 'Potato from Ukraine', 15.331, false, Category.Vegetables, 30, 30),
              new ProductModel('Nut', 'Nuts from squirrel', 150.02, false, Category.Nuts, 40, 40),
              new ProductModel('Apple Juice', 'Apple Juice from grammy garden', 45.5544, true, Category.Fruits, 50, 50)
  ];

  constructor() { }

  /*getProducts(): Array<ProductModel> {
    return this.products;
  }*/

  getProducts(): Promise<Array<ProductModel>> {
   return new Promise ((resolve, reject) => {
    setTimeout(() => {
      resolve(this.products);
      // reject('Error');
    }, 500);
  }).catch(error => error);
}
}
