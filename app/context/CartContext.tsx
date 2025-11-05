'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { CartItem, CartContextType } from '../types/cart';

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);

  // Load cart from localStorage on mount
  useEffect(() => {
    const savedCart = localStorage.getItem('cart');
    if (savedCart) {
      try {
        setItems(JSON.parse(savedCart));
      } catch (error) {
        console.error('Error loading cart from localStorage:', error);
      }
    }
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(items));
  }, [items]);

  const generateItemId = (item: Omit<CartItem, 'id'>): string => {
    return `${item.productId}-${item.color || 'default'}`;
  };

  const addItem = (item: Omit<CartItem, 'id'>) => {
    const id = generateItemId(item);
    setItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === id);
      if (existingItem) {
        // Update quantity if item already exists
        return prevItems.map((i) =>
          i.id === id ? { ...i, quantity: i.quantity + item.quantity } : i
        );
      }
      // Add new item
      return [...prevItems, { ...item, id }];
    });
  };

  const removeItem = (id: string) => {
    setItems((prevItems) => prevItems.filter((i) => i.id !== id));
  };

  const updateQuantity = (id: string, quantity: number) => {
    if (quantity <= 0) {
      removeItem(id);
      return;
    }
    setItems((prevItems) =>
      prevItems.map((i) => (i.id === id ? { ...i, quantity } : i))
    );
  };

  const clearCart = () => {
    setItems([]);
  };

  const getTotal = (): number => {
    return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  };

  const getItemCount = (): number => {
    return items.reduce((sum, item) => sum + item.quantity, 0);
  };

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        removeItem,
        updateQuantity,
        clearCart,
        getTotal,
        getItemCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}

