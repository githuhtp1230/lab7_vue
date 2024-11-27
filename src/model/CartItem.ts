import { Product } from "./Product";

export class CartItem {
  product: Product;
  quantity: number;
  isSelected: boolean;

  constructor(
    product: Product,
    quantity: number = 1,
    isSelected: boolean = false
  ) {
    this.product = product;
    this.quantity = quantity;
    this.isSelected = isSelected;
  }

  getTotalPrice(): number {
    return this.product.price * this.quantity;
  }
}
