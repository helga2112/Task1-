import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule,
  useValue: {
    App: "TaskManager", Ver: "1.0" 
  }
})
export class ConstantsServiceService {

  constructor() { }
}
