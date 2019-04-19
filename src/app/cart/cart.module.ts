import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartListComponent } from './cart-list/cart-list.component';
import { CartItemComponent } from './cart-item/cart-item.component';
import { OrderByPipe } from '../pipes/order-by.pipe';

@NgModule({
  declarations: [CartListComponent,
     CartItemComponent,
     OrderByPipe],
  imports: [
    CommonModule
  ],
  exports: [
    CartListComponent
  ]
})
export class CartModule { }
