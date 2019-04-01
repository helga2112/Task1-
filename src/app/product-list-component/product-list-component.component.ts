import { Component, OnInit } from '@angular/core';
import {GetProductService} from '../product-service/product-service.service';
import {IProductModel} from "../models/IProductModel";

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: Array<IProductModel> = [];

  constructor(public service:GetProductService) {
  }


  ngOnInit() {
    this.products = this.service.getProductList();
    console.log(this.products);
  }


}
