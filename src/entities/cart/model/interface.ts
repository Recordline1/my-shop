// Interface definition for the slice entities/cart
export type CartItem  = {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string
}

export type CartStore = {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  updateQuantity: (id: string, quantity: number) => void;
  getTotalPrice: () => number;
};
