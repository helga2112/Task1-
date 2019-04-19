import { Component, OnInit, Input } from '@angular/core';
import {GetProductService} from '../product-service/product-service.service';
import { ProductModel } from '../models/ProductModel';
import { IProductModel } from '../models/IProductModel';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array <ProductModel> = [];

  promise:  Promise<Array<ProductModel>>;

  filterargs = {property: 'name', descending: true};

  constructor(public service: GetProductService) {
  }

  ngOnInit() {
    this.promise = this.service.getProducts();
    this.promise.then (
      property => (this.products = property ),
      reject => console.log('[ERROR] ', reject)
    )
    console.log(this.products);
  }


}
