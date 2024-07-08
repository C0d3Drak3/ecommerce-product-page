"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { useLocalStorage } from "../components/useLocalStorage";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { getItem, setItem } = useLocalStorage("sneakersLE1");
  const [cart, setCart] = useState(() => {
    if (typeof window !== "undefined") {
      // Esto asegura que el código solo se ejecute en el cliente
      const savedCart = getItem();
      return savedCart
        ? savedCart
        : {
            name: "Sneakers LE",
            description: "Fall Limited Edition Sneakers",
            stock: 9,
            price: 125,
            discount: 50,
            cartCount: 0,
          };
    } else {
      return {
        name: "Sneakers LE",
        description: "Fall Limited Edition Sneakers",
        stock: 9,
        price: 125,
        discount: 50,
        cartCount: 0,
      };
    }
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      // Aseguramos que el setItem solo se llame en el cliente
      setItem(cart);
    }
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
