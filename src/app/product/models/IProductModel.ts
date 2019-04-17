import { Category } from '../product-component/product-component';

export  interface IProductModel {
  name: string;
  description: string;
  price: number;
  isAvailable: boolean;
  category: Category;
  maxAmount?: number;
  specialPrice?: number;
  ammountInCart?: number;
}
