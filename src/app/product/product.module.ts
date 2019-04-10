import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product-component/product-component';
import { ProductListComponent } from './product-list-component/product-list-component';
import { ProductBackgroundColorDirective } from '../Derectives/change-color.derective';

@NgModule({
  declarations: [
    ProductComponent,
    ProductListComponent,
  //  ProductBackgroundColorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ProductComponent,
    ProductListComponent
  ]
})
export class ProductModule { }
