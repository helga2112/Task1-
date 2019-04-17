import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from '../local-storage/local-storage.module';
import { GeneratorFactory, hashGenerator } from '../services/generator.service';
import { GeneratorService } from '../services/generatorService/generator-service.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    LocalStorageModule
  ],
  providers: [
    GeneratorService,
    {provide: hashGenerator, useFactory: GeneratorFactory(3), deps: [GeneratorService] },
  ]
})
export class CoreModule { }
