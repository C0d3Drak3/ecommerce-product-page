"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("sneakersLE1");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    // Cargar el carrito desde localStorage al inicio
    const savedCart = getItem();
    if (savedCart) {
      setCart(savedCart);
    }
  }, [getItem]);

  const addToCart = (product) => {
    const existingProduct = cart.find((p) => p.id === product.id);
    if (existingProduct) {
      const updatedCart = cart.map((p) =>
        p.id === product.id ? { ...p, cartCount: p.cartCount + 1 } : p
      );
      setCart(updatedCart);
    } else {
      const newProduct = { ...product, cartCount: 1 };
      setCart([...cart, newProduct]);
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.map((p) =>
      p.id === productId ? { ...p, cartCount: p.cartCount - 1 } : p
    );
    setCart(updatedCart.filter((p) => p.cartCount > 0));
  };

  useEffect(() => {
    // Guardar el carrito en localStorage cuando cambie
    if (typeof window !== "undefined") {
      setItem(cart);
    }
  }, [cart, setItem]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
