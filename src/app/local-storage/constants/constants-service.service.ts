import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule,
})
export class ConstantsServiceService {

  contents: {
    App: "TaskManager", Ver: "1.0" 
  }

  constructor() { }

  getContents(){
    return this.contents;
  }
}
