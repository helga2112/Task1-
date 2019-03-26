import { Component, OnInit } from '@angular/core';

enum Category {
  Product1,
  Product2,
  Product3,
  Product4,
  Product5
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.component.html',
  styleUrls: ['./product-component.component.css']
})
export class ProductComponentComponent implements OnInit {


    name = 'Test Name';
    description = 'Here is the test shop';
    price = 100;
    isAvailable = true;


    constructor() { }

  ngOnInit() {
  }

}
