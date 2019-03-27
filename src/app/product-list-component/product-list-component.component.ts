import { Component, OnInit } from '@angular/core';
import {TOProduct} from '../TypeObjects/TOProduct';
import {ProductServiceService} from '../product-service/product-service.service';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<TOProduct> = [];
  service: ProductServiceService;

  constructor() { }

  ngOnInit() {
    this.products = this.service.getProductList();
    this.displayProducts();
  }

  displayProducts() {
    console.log('show');
  }


}
