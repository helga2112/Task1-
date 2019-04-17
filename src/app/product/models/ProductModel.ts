import {IProductModel} from './IProductModel';
import {Category} from '../product-component/product-component';

export class ProductModel implements IProductModel {
  constructor( public name: string,
               public description: string,
               public price: number,
               public isAvailable: boolean,
               public category: Category,
               public maxAmount: number,
               public specialPrice: number
                ) {

    this.name = name;
    this.description = description;
    this.price = price;
    this.isAvailable = isAvailable;
    this.category = category;
    this.maxAmount = maxAmount;
    this.specialPrice = specialPrice;
  }

}
