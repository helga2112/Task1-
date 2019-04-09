import { Injectable} from '@angular/core';
import { IProductModel } from 'src/app/product/models/IProductModel';
import { EventEmitter } from 'events';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Array<IProductModel> = [];

  totalAmountOfProducts = 0;

  totalAmount = 0;

  emitter: EventEmitter = new EventEmitter();

  constructor() { }


  addProduct(productItem: IProductModel){
   
    var item = this.cartProducts.indexOf(productItem);
    if (item > -1){
      this.cartProducts[item].ammountInCart ++;
    }else{
      productItem.ammountInCart = 1;
      this.cartProducts.push(productItem);
    }
    this.emitter.emit('CART_UPDATED');
  }



  removeItem(productItem: IProductModel){
    let index = this.cartProducts.indexOf(productItem);
    this.cartProducts.splice(index, 1);
    this.emitter.emit('CART_UPDATED');
  }

  removeAllProducts(){
    this.cartProducts.length = 0;
    this.totalAmountOfProducts = 0;
    this.totalAmount = 0;
    this.emitter.emit('CART_UPDATED');
  }

  getCartProducts(){
    return this.cartProducts;
  }

  getTotalCartAmount(){
    var amount = 0;
    this.cartProducts.forEach(function(item){
      amount += item.ammountInCart;
    })
    return amount;
  }

  getTotalPrice(){
    var totalPrice = 0;
    this.cartProducts.forEach(function(item){
      totalPrice += item.price * item.ammountInCart;
    })
    return totalPrice;
  }

  
}
