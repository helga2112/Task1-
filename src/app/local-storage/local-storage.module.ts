import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigOptionsService } from './configOptions/config-options.service';
import { ConstantsServiceService } from './constants/constants-service.service';
import { GeneratorServiceService } from './generatorService/generator-service.service';
import { MyLocalStorageService } from './localStorage/local-storage.service';

@NgModule({
  declarations: [
    // ConfigOptionsService,
    // GeneratorServiceService,
    // MyLocalStorageService
  ],
  imports: [
    CommonModule
  ],
  exports:  [
    // ConfigOptionsService,
    // ConstantsServiceService,
    // GeneratorServiceService,
    // MyLocalStorageService,

  ]
})
export class LocalStorageModule { 

}
