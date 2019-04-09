import { Injectable, EventEmitter} from '@angular/core';
import { IProductModel } from 'src/app/product/models/IProductModel';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts:Array<IProductModel> = [];
  cartUpdated: EventEmitter<boolean> = new EventEmitter();

  constructor() { }


  addProduct(productItem: IProductModel){
    console.log( '[SERVICE] You\'ve bought a product!');
    var item = this.cartProducts.indexOf(productItem);
    if (item > -1){
      this.cartProducts[item].ammountInCart ++;
    }else{
      productItem.ammountInCart = 1;
      this.cartProducts.push(productItem);
    }
    this.cartUpdated.emit()
  }



  removeItem(productItem: IProductModel){
    let index = this.cartProducts.indexOf(productItem);
    this.cartProducts.splice(index, 1);
  }

  removeAllProducts(){
    this.cartProducts.length = 0;
  }

  getCartProducts(){
    return this.cartProducts;
  }
}
