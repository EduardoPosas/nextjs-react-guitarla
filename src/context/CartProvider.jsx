'use client'

import { createContext, useContext, useEffect, useState } from 'react';

export const CartContext = createContext(null);

export default function CartProvider({ children }) {
  const cartDefault = typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('cart')) ?? [] : [];
  const [cart, setCart] = useState(cartDefault);

  //hydration
  const [pageReady, setPageReady] = useState(false);

  useEffect(() => {
    setPageReady(true);
  }, []);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  const addProduct = (cartProduct) => {
    if (cart.some(product => product.id === cartProduct.id)) {
      // Update quantity
      const updatedCart = cart.map(product => {
        if (product.id === cartProduct.id) {
          product.quantity = cartProduct.quantity;
        }
        return product;
      })
      setCart(updatedCart);
    } else {
      setCart([
        ...cart,
        cartProduct
      ])
    }
  }

  const updateQuantity = (id, quantity) => {
    if (cart.some(product => product.id === id)) {
      const updatedCart = cart.map(product => {
        if (product.id === id) {
          product.quantity = Number(quantity);
        }
        return product;
      })
      setCart(updatedCart);
    }
  }

  const deleteProduct = (id) => {
    const filteredCart = cart.filter(product => product.id !== id);
    setCart(filteredCart);
  }

  return (
    pageReady ? <CartContext.Provider
      value={{ cart, addProduct, updateQuantity, deleteProduct }}
    >
      {children}
    </CartContext.Provider> : null
  );
}

export function useCartContext() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCartContext must be whitin CartProvider');
  }
  return context;
};