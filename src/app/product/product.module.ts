import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { OrderByPipe } from '../pipes/order-by.pipe';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
    OrderByPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent,
    OrderByPipe
  ]
})
export class ProductModule { }
