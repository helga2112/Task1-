import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyLocalStorageService {

  constructor() { }

  setItem(itemName: string, item: string){
    localStorage.setItem(itemName, item);
  }

  getItem(key:string){
    let data: string = localStorage.getItem(key);
    return data;
  }

  removeItem(key:string){
    localStorage.removeItem(key);
  }
}
