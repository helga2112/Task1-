import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule
})
export class GeneratorServiceService {

  constructor() { }

  // Generate a random string of given length n.
  generate(n:number){
    var text = ''; 
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < n; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
}
