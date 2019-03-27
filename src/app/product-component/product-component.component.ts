import { Component, OnInit } from '@angular/core';
import {TOProduct} from '../TypeObjects/TOProduct';

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

    buttonByeTitle = 'Bye'
    name = 'Test Name';
    description = 'Here is the test shop';
    price = 100;
    isAvailable = true;
    category = Category.Fruits;

    constructor() { }

  ngOnInit() {
  }

  onClickBye() {
    console.log( 'You\'ve bought a product!');
  }

  setData( data: TOProduct) {
    this.name = data.name;
    this.description = data.description;
    this.price = data.price;
    this.isAvailable = data.isAvailable;
    this.category = data.category;
  }

}
