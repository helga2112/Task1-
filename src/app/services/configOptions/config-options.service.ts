import { Injectable } from '@angular/core';
import { LocalStorageModule } from '../../local-storage/local-storage.module';
import { UserModel } from '../../local-storage/model/user-data.model';

@Injectable({
  providedIn: LocalStorageModule
})
export class ConfigOptionsService {

  private user: UserModel = new UserModel('1', 'Test User', 'qwerty', 'test@gmail.com', '+38050123456789');

  constructor() { }

  getUser() {
    return this.user;
  }

  setUser(data: UserModel) {
    const { id = '-1', name = '', password = '', email = '', phone = ''} = data;


    this.user = new UserModel(id,
                              name,
                              password,
                              email,
                              phone
                              );
  }

  // Set or change property of user object
  setProperty(key: string, value: string) {
    this.user[key] = value;
  }

  // Get proeprty by key
  getProperty(key: string) {
    return  this.user[key];
  }
}
