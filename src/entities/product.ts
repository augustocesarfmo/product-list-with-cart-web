import { v4 as uuidv4 } from "uuid";

export class Product {
  private _id: string = uuidv4();
  private _name: string;
  private _price: number;
  private _category: string;
  private _imageUrl: string;

  constructor(name: string, price: number, category: string, imageUrl: string) {
    this._name = name;
    this._price = price;
    this._category = category;
    this._imageUrl = imageUrl;
  }
}
