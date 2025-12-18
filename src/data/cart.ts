import { ProductsData } from "./products";

export interface CartItem extends ProductsData {
  cartQuantity: number;
}
