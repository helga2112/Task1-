import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CartModule } from './cart/cart.module';
import { CoreModule } from './core/core.module';
import { OrderModule } from './order/order.module';
import { ProductModule } from './product/product.module';
import { SharedModule } from './shared/shared.module';
import { LocalStorageModule } from './local-storage/local-storage.module';
import { ProductBackgroundColorDirective } from './Derectives/change-color.derective';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,

    CartModule,
    CoreModule,
    OrderModule,
    ProductModule,
    SharedModule,
    LocalStorageModule,
    ProductBackgroundColorDirective
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
