import { Component, OnInit, Input } from '@angular/core';
import {GetProductService} from '../product-service/product-service.service';
import { ProductModel } from '../models/ProductModel';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.html',
  styleUrls: ['./product-list-component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  products: Array<ProductModel> = [];

 
  constructor(public service:GetProductService) {
  }


  ngOnInit() {
    this.products = this.service.getProductList();
  }


}
