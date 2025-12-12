import { create } from "zustand";

export const useCartStore = create((set) => ({
  cart: [],
  count: 0,

  setCart: (cart) =>
    set((state) => ({
      cart,
      count: cart.reduce((sum, item) => sum + item.quantity, 0),
    })),

  addItem: (item) =>
    set((state) => {
      const existing = state.cart.find((i) => i.id === item.id);
      let newCart;
      if (existing) {
        newCart = state.cart.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        newCart = [...state.cart, { ...item, quantity: 1 }];
      }
      return {
        cart: newCart,
        count: newCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),

  removeItem: (id) =>
    set((state) => {
      const newCart = state.cart.filter((i) => i.id !== id);
      return {
        cart: newCart,
        count: newCart.reduce((sum, i) => sum + i.quantity, 0),
      };
    }),
}));
