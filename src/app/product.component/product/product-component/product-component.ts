import { Component, OnInit, Input, ElementRef} from '@angular/core';
import { CartService } from 'src/app/cart/services/cart.service';
import { IProductModel } from '../models/IProductModel';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/fr';

registerLocaleData(localeFr);

export  enum Category {
  Vegetables = 'Vegetables',
  Fruits = 'Fruits',
  Nuts = 'Nuts',
  Salads = 'Salads',
  Juice = 'Juice'
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
  constructor(public service: CartService ) {
  }

  ngOnInit() {
    this.buttonByeTitle = 'Buy';
  }

  onClickBye() {
    this.service.addProduct(this.product);
  }

}
