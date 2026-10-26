"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { CartItem, Language, Product, ProductSize } from "@/types";
import { SHIPPING_POLICY } from "@/lib/data";
import { translations } from "@/lib/i18n";

interface StoreContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: typeof translations.ca;
  cart: CartItem[];
  addToCart: (product: Product, size: ProductSize, quantity?: number) => void;
  removeFromCart: (productId: string, size: ProductSize) => void;
  updateQuantity: (productId: string, size: ProductSize, delta: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  shippingCost: number;
  freeShippingQualified: boolean;
  freeShippingRemaining: number;
  total: number;
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export function StoreProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>("ca");
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);

  // Load from localStorage on mount
  useEffect(() => {
    try {
      const savedLang = localStorage.getItem("urbanstyles_lang") as Language;
      if (savedLang && ["ca", "es", "en"].includes(savedLang)) {
        setLanguageState(savedLang);
      }
      const savedCart = localStorage.getItem("urbanstyles_cart");
      if (savedCart) {
        setCart(JSON.parse(savedCart));
      }
    } catch (e) {
      console.error("Failed to load store data from localStorage", e);
    }
    setIsLoaded(true);
  }, []);

  // Sync to localStorage
  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("urbanstyles_lang", language);
    } catch (e) {
      console.error("Failed to save language to localStorage", e);
    }
  }, [language, isLoaded]);

  useEffect(() => {
    if (!isLoaded) return;
    try {
      localStorage.setItem("urbanstyles_cart", JSON.stringify(cart));
    } catch (e) {
      console.error("Failed to save cart to localStorage", e);
    }
  }, [cart, isLoaded]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
  };

  const addToCart = (product: Product, size: ProductSize, quantity: number = 1) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) => item.product.id === product.id && item.selectedSize === size
      );

      // Check stock limit for that size
      const variantStock = product.variants.find((v) => v.size === size)?.stock ?? 0;
      if (variantStock <= 0) return prev;

      if (existingIndex > -1) {
        const newCart = [...prev];
        const newQuantity = Math.min(
          newCart[existingIndex].quantity + quantity,
          variantStock
        );
        newCart[existingIndex] = {
          ...newCart[existingIndex],
          quantity: newQuantity,
        };
        return newCart;
      } else {
        const initialQuantity = Math.min(quantity, variantStock);
        return [...prev, { product, selectedSize: size, quantity: initialQuantity }];
      }
    });
    setIsCartOpen(true);
  };

  const removeFromCart = (productId: string, size: ProductSize) => {
    setCart((prev) =>
      prev.filter(
        (item) => !(item.product.id === productId && item.selectedSize === size)
      )
    );
  };

  const updateQuantity = (productId: string, size: ProductSize, delta: number) => {
    setCart((prev) => {
      return prev
        .map((item) => {
          if (item.product.id === productId && item.selectedSize === size) {
            const variantStock =
              item.product.variants.find((v) => v.size === size)?.stock ?? 0;
            const newQty = item.quantity + delta;
            if (newQty <= 0) return null;
            return {
              ...item,
              quantity: Math.min(newQty, variantStock),
            };
          }
          return item;
        })
        .filter((item): item is CartItem => item !== null);
    });
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const subtotal = Number(
    cart
      .reduce((acc, item) => acc + item.product.price * item.quantity, 0)
      .toFixed(2)
  );

  const freeShippingQualified = subtotal >= SHIPPING_POLICY.freeShippingThreshold && subtotal > 0;
  const shippingCost = cart.length === 0 ? 0 : freeShippingQualified ? 0 : SHIPPING_POLICY.standardShippingRate;
  const freeShippingRemaining = Math.max(
    0,
    Number((SHIPPING_POLICY.freeShippingThreshold - subtotal).toFixed(2))
  );

  const total = Number((subtotal + shippingCost).toFixed(2));

  const t = translations[language];

  return (
    <StoreContext.Provider
      value={{
        language,
        setLanguage,
        t,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        shippingCost,
        freeShippingQualified,
        freeShippingRemaining,
        total,
        isCartOpen,
        openCart: () => setIsCartOpen(true),
        closeCart: () => setIsCartOpen(false),
      }}
    >
      {children}
    </StoreContext.Provider>
  );
}

export function useStore() {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error("useStore must be used within a StoreProvider");
  }
  return context;
}

