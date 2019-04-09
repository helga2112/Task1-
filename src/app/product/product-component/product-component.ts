import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { IProductModel } from '../models/IProductModel';

export  enum Category {
  Vegetables,
  Fruits,
  Nuts,
  Salads,
  Juice
}

@Component({
  selector: 'app-product-component',
  templateUrl: './product-component.html',
  styleUrls: ['./product-component.css']
})
export class ProductComponent implements OnInit {
  
  @Input()
  product: IProductModel;

  buttonByeTitle: string;
  
    constructor(public service:CartService) {
    }

  ngOnInit() {
    this.buttonByeTitle = 'Buy';
  }

  onClickBye() {
    this.service.addProduct(this.product);
  }

  onMouseOver() {
  }

  onBlur() {
  }
}
