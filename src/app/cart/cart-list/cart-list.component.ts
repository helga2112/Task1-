import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers, ChangeDetectorRef, DoCheck } from '@angular/core';
import { ProductModel } from 'src/app/product.component/product/models/ProductModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit, DoCheck {
  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  @Input()
  products: Array<ProductModel> = [];

  totalAmountOfProducts = 0;

  totalPrice = 0;

  isEmptyList = true;
  clearCartButtonTitle = 'Clear Cart';

  currentDate: Date;

  keys: Array<string> = ['name', 'price','category'];

  filterargs = {property: 'name', descending: true};

  private differ: any;

  constructor(public service: CartService,  private differs: KeyValueDiffers, private ref: ChangeDetectorRef) {
  }

  ngOnInit() {
    this.differ = this.differs.find(this.products).create();
    this.service.emitter.addListener('CART_UPDATED', this.addComponent.bind(this));
    this.currentDate = new Date();
  }


  ngDoCheck() {
    // changes is an instance of DefaultKeyValueDiffer Class
    const  changes = this.differ.diff( this.products);

    if (changes) {
      this.isEmptyList = false;
      changes.forEachAddedItem(item => this.logChange('added', item));
      changes.forEachRemovedItem(item => this.logChange('removed', item));
      changes.forEachChangedItem(item => this.logChange('changed', item));
    }
}

  addComponent() {
    this.products = this.service.getCartProducts();
    this.totalAmountOfProducts = this.service.getTotalCartAmount();
    this.totalPrice = this.service.getTotalPrice();
  }

  logChange(text, item) {
    console.log(text, item);
  }

  clearCart() {
    this.isEmptyList = true;
    this.service.removeAllProducts();
  }

  sortBy(event: Event) : void {
    console.log(event.target['value']);
    let sortProeprty: string = event.target['value'];
    this.filterargs.property = sortProeprty;
    this.products = [ ...this.products];
  }

}
