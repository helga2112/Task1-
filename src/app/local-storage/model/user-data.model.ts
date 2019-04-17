import { IUserData } from './iuser-data';

export class UserModel implements IUserData {

constructor( public id: string, public name: string, public password: string, public email: string, public phone: string) {
}
}
