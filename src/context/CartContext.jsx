// src/context/CartContext.js
import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (pizza) => {
    setCartItems((prevItems) => {
      const existingItem = prevItems.find(item => item.id === pizza.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === pizza.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      } else {
        return [...prevItems, { ...pizza, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.filter((item) => item.id !== pizzaId)
    );
  };

  const incrementQuantity = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.id === pizzaId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrementQuantity = (pizzaId) => {
    setCartItems((prevItems) =>
      prevItems.reduce((acc, item) => {
        if (item.id === pizzaId) {
          if (item.quantity === 1) return acc;
          return [...acc, { ...item, quantity: item.quantity - 1 }];
        }
        return [...acc, item];
      }, [])
    );
  };

  useEffect(() => {
    setTotalPrice(cartItems.reduce((total, item) => total + item.price * item.quantity, 0));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
