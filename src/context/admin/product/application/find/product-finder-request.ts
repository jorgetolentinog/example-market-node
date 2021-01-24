import { ProductId } from "@/context/admin/product/domain/product-id";

export class ProductFinderRequest {
  private _id: ProductId;

  constructor(id: string) {
    this._id = new ProductId(id);
  }

  id() {
    return this._id;
  }
}