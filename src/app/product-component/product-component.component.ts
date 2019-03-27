import { Component, OnInit } from '@angular/core';
import {IProductModel} from '../models/IProductModel';

export  enum Category {
  Vegetables,
  Fruits,
  Nuts,
  Salads,
  Juice
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {

    buttonByeTitle: string;
    name: string;
    description: string;
    price: number;
    isAvailable: boolean;
    category: Category;

    data: IProductModel;
    constructor() {
    }

  ngOnInit() {
    this.buttonByeTitle = 'Buy';
  }

  onClickBye() {
    console.log( 'You\'ve bought a product!');
  }

  setData( data: IProductModel) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.isAvailable = data.isAvailable;
    this.category = data.category;
  }

}
