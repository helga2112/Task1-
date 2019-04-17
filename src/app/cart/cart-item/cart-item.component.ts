import { Component, OnInit, Input, HostBinding, HostListener } from '@angular/core';
import { IProductModel } from 'src/app/product/models/IProductModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  buttonTitle = 'Remove from cart';

  @Input()
  product: IProductModel;

  @HostBinding('class')
  attrClass = 'headingClass';

  @HostListener('mouseenter', ['$event'])
  enter(event: Event) {
    this.attrClass = 'headingClassOver';
  }

  @HostListener('mouseleave', ['$event'])
  leave(event: Event) {
    this.attrClass = 'headingClass';
  }

  constructor(public service: CartService) { }

  ngOnInit() {
  }

  onClick() {
    this.service.removeItem(this.product);
  }

}
