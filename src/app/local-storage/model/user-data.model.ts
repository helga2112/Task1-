import { IUserData } from "./iuser-data";

export class ProductModel implements IUserData{

	constructor ( public id: string,
		public name : string,
		public password : string,
		public email : string,
		public phone : string,
		){

	this.id = id;
	this.name = name;
	this.password = password;
	this.email = email;
	this.phone = phone;
		}
}
