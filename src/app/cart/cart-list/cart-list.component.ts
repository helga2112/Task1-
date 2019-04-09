import { Component, OnInit, Input, Output, EventEmitter, KeyValueDiffers } from '@angular/core';
import { ProductModel } from 'src/app/product/models/ProductModel';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css']
})
export class CartListComponent implements OnInit {
  @Output()
  addProduct: EventEmitter<ProductModel> = new EventEmitter<ProductModel>();

  @Input()
  products: Array<ProductModel> = [];

  totalAmountOfProducts = 0;

  isEmptyList = true;
  
  private differ: any;

  constructor(public service:CartService,  private differs: KeyValueDiffers) {
    
  }

  ngOnInit() {
    this.differ = this.differs.find(this.products).create();
    this.service.cartUpdated.subscribe(this.addComponent());
  }


  ngDoCheck(): void {
    // changes is an instance of DefaultKeyValueDiffer Class
    const  changes = this.differ.diff( this.products);

    if (changes) {
      this.isEmptyList = false;
         changes.forEachAddedItem(item => this.logChange('added', item));
         changes.forEachRemovedItem(item => this.logChange('removed', item));
         changes.forEachChangedItem(item => this.logChange('changed', item));
    }
}

  addComponent(){
    console.log('Got ya!');
    this.products = this.service.getCartProducts();
  }
  
  logChange(text, item){
    console.log(text, item);
  }
}
