import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { CartStore } from "./interface";





export const useCartStore = create<CartStore>()(
  persist((set, get) => ({
    items: [],
    addItem: (item) => {
      const existing = get().items.find(i => i.sku === item.sku)
      if (!existing) {
        set(state => ({ items: [...state.items, { ...item, quantity: 1 }] }))
      }
    },
    removeItem: (sku) => set({ items: get().items.filter((i) => i.sku !== sku) }),
    clearCart: () => set({ items: [] }),
    updateQuantity: (sku, quantity) => set({ items: get().items.map((i) => (i.sku === sku ? { ...i, quantity } : i)) }),
    getTotalPrice: () => get().items.reduce((total, item) => total + item.price * item.quantity, 0),
  }),
    { name: 'cart-storage' }
  ))



