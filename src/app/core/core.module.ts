import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocalStorageModule } from '../local-storage/local-storage.module';
import { GeneratorService } from '../local-storage/generatorService/generator-service.service';
import { GeneratorFactory, Hash_Generator } from '../services/generator.service';

@NgModule({
  declarations: [],
  imports: [
  
    CommonModule,
    LocalStorageModule
  ],
  providers: [
    GeneratorService,
    {provide: Hash_Generator, useFactory: GeneratorFactory(3), deps: [GeneratorService] },
  ]
})
export class CoreModule { }
