import { createContext, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import type { Product } from "@/lib/products";

export interface CartItem extends Product {
  category: string;
  quantity: number;
}

interface CartContextValue {
  items: CartItem[];
  itemCount: number;
  subtotal: number;
  addItem: (product: Product, category: string) => void;
  updateQuantity: (name: string, quantity: number) => void;
  removeItem: (name: string) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextValue | undefined>(undefined);

export function priceToNumber(price: string) {
  return Number(price.replace("€", "").replace(".", "").replace(",", "."));
}

export function formatPrice(value: number) {
  return new Intl.NumberFormat("es-ES", { style: "currency", currency: "EUR" }).format(value);
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    try {
      const saved = window.sessionStorage.getItem("mtom-cart");
      if (saved) setItems(JSON.parse(saved) as CartItem[]);
    } catch {
      window.sessionStorage.removeItem("mtom-cart");
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (!hydrated) return;
    window.sessionStorage.setItem("mtom-cart", JSON.stringify(items));
  }, [hydrated, items]);

  const value = useMemo<CartContextValue>(() => ({
    items,
    itemCount: items.reduce((sum, item) => sum + item.quantity, 0),
    subtotal: items.reduce((sum, item) => sum + priceToNumber(item.price) * item.quantity, 0),
    addItem: (product, category) => setItems((current) => {
      const existing = current.find((item) => item.name === product.name);
      if (existing) return current.map((item) => item.name === product.name ? { ...item, quantity: item.quantity + 1 } : item);
      return [...current, { ...product, category, quantity: 1 }];
    }),
    updateQuantity: (name, quantity) => setItems((current) => quantity <= 0 ? current.filter((item) => item.name !== name) : current.map((item) => item.name === name ? { ...item, quantity } : item)),
    removeItem: (name) => setItems((current) => current.filter((item) => item.name !== name)),
    clearCart: () => setItems([]),
  }), [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within CartProvider");
  return context;
}