import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../local-storage.module';

@Injectable({
  providedIn: LocalStorageModule
})
export class GeneratorServiceService {

  constructor() { }

  generate(n:number){
    // var crypto = require("crypto");
    // var id = crypto.randomBytes(20).toString('hex');
    // console.log("[HASH] " + id);
    // return id;
  }
}
