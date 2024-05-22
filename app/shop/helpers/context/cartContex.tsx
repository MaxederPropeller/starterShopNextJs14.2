'use client';

import { createContext, useContext, useState } from 'react';

import { toast } from 'sonner';
import { CartProviderProps, ProductType } from '../types';

// Erstelle den CartContext
export const CartContext = createContext<any>(null);

// Custom Hook zum Verwenden des CartContext
export const useCart = () => {
  return useContext(CartContext);
};



// CartProvider Komponente
export const CartProvider = ({ children }: CartProviderProps) => {
  const [cart, setCart] = useState<{ product: ProductType; quantity: number }[]>([]);

  const addToCart = (product: ProductType) => {
    setCart(prevCart => {
      const existingProduct = prevCart.find(p => p.product.id === product.id);
      if (existingProduct) {
        return prevCart.map(p =>
          p.product.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        );
      } else {
        return [...prevCart, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => {
      const productItem = prevCart.find(p => p.product.id === productId);
      if (productItem && productItem.quantity > 1) {
        return prevCart.map(p =>
          p.product.id === productId ? { ...p, quantity: p.quantity - 1 } : p
        );
      } else {
        return prevCart.filter(p => p.product.id !== productId);
      }
    });
  };

  const clearFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(p => p.product.id !== productId));
  };


  
  const cartTotal = cart.reduce((acc, { product, quantity }) => acc + (product?.salePrice ?? 0) * quantity, 0);

  const removeAllFromCart = () => {
    setCart([]);
    toast.success('Warenkorb wurde geleert', 
      {
        position: 'bottom-right',
        icon: '🗑️'
       
      }
    );
  };

  return (
    <div className="relative">
      <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearFromCart, removeAllFromCart, cartTotal }}>
        {children}
      </CartContext.Provider>
    </div>
  );
};
