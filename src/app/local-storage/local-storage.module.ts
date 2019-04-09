import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './configOptions/config-options.service';
  

const configService = new ConfigOptionsService();

@NgModule({
  declarations: [
   
  ],
  imports: [
    CommonModule
  ],
  exports:  [
  ],
  providers: [
    { provide: ConfigOptionsService, useValue: configService },
  ]
})
export class LocalStorageModule { 

}
