// Interface definition for the slice entities/cart
import { Product } from "@shared/types/product";
export type CartItem  = {
  sku: string;
  name: string;
  price: number;
  quantity: number;
  image?: string
}

export type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (sku: string) => void;
  clearCart: () => void;
  updateQuantity: (sku: string, quantity: number) => void;
  getTotalPrice: () => number;
};
