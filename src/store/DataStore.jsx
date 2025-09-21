import { create } from "zustand";

// Zustand store with localStorage
export const useCartStore = create((set) => ({
  cart: JSON.parse(localStorage.getItem("cart")) || [], // initial value from localStorage

  addToCart: (product) =>
    set((state) => {
      const existing = state.cart.find((p) => p.id === product.id);
      let newCart;
      if (existing) {
        newCart = state.cart.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + product.qty } : p
        );
      } else {
        newCart = [...state.cart, product];
      }
      localStorage.setItem("cart", JSON.stringify(newCart)); // save in localStorage
      return { cart: newCart };
    }),

  increase: (id) =>
    set((state) => {
      const newCart = state.cart.map((p) =>
        p.id === id ? { ...p, qty: Math.min(10, p.qty + 1) } : p
      );
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  decrease: (id) =>
    set((state) => {
      const newCart = state.cart
        .map((p) =>
          p.id === id ? { ...p, qty: Math.max(1, p.qty - 1) } : p
        )
        .filter((p) => p.qty > 0);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),

  removeFromCart: (id) =>
    set((state) => {
      const newCart = state.cart.filter((p) => p.id !== id);
      localStorage.setItem("cart", JSON.stringify(newCart));
      return { cart: newCart };
    }),
}));
