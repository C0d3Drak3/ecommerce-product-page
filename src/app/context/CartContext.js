"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("sneakersLE1");
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const savedCart = getItem();
    if (savedCart) {
      setCart(savedCart);
    }
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setItem(cart);
    }
  }, [cart, setItem]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((p) => p.id === product.id);
      if (existingProduct) {
        return prevCart.map((p) =>
          p.id === product.id ? { ...p, cartCount: p.cartCount + 1 } : p
        );
      } else {
        return [...prevCart, { ...product, cartCount: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) =>
      prevCart
        .map((p) =>
          p.id === productId ? { ...p, cartCount: p.cartCount - 1 } : p
        )
        .filter((p) => p.cartCount > 0)
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
