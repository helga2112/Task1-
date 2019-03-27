import { Component, OnInit } from '@angular/core';
import {ProductServiceService} from '../product-service/product-service.service';
import {IProductModel} from "../models/IProductModel";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<IProductModel> = [];
  service: ProductServiceService;

  constructor(public service:ProductServiceService) {
    this.service = service;
  }


  ngOnInit() {
    this.products = this.service.getProductList();
    console.log(this.products);
  }


}
