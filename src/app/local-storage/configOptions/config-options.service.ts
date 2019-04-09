import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule
})
export class ConfigOptionsService {

  constructor() { }
}
