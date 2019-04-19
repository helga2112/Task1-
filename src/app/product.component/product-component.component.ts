import { Component, OnInit } from '@angular/core';
import { IProductModel } from './product/models/IProductModel';

export  enum Category {
  Vegetables = 'Vegetables',
  Fruits = 'Fruits',
  Nuts = 'Nuts',
  Salads = 'Salads',
  Juice = 'Juice'
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

}
