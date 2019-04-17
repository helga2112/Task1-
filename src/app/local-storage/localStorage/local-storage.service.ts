import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule
})
export class MyLocalStorageService {

  constructor() { }

  // set item from local storage
  setItem(itemName: string, item: string) {
    localStorage.setItem(itemName, item);
  }

  // get item from local storage
  getItem(key: string) {
    const data: string = localStorage.getItem(key);
    return data;
  }

  // remove item from local storage
  removeItem(key: string) {
    localStorage.removeItem(key);
  }
}
