import { ProductId } from "@/context/admin/product/domain/product-id";
import { ProductName } from "@/context/admin/product/domain/product-name";
import { ProductPrice } from "@/context/admin/product/domain/product-price";
import { ProductCategoriesId } from "../../domain/product-categories-id";

export class ProductCreatorRequest {
  private _id: ProductId;
  private _name: ProductName;
  private _price: ProductPrice;
  private _categories: ProductCategoriesId;

  constructor(id: string, name: string, price: number, categories: string[]) {
    this._id = new ProductId(id);
    this._name = new ProductName(name);
    this._price = new ProductPrice(price);
    this._categories = new ProductCategoriesId(categories);
  }

  id() {
    return this._id;
  }

  name() {
    return this._name;
  }

  price() {
    return this._price;
  }

  categories() {
    return this._categories;
  }
}
