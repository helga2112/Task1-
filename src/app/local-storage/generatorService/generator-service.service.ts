import { Injectable } from '@angular/core';

@Injectable()
export class GeneratorService {

  constructor() { }

  getData() {
    return 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  }
}
