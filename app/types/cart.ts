// Cart Types

export interface CartItem {
  id: string; // Unique ID for this cart item (productId + color + variant)
  productId: string;
  productName: string;
  color?: string;
  colorName?: string;
  price: number; // in cents
  quantity: number;
}

export interface CartContextType {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'id'>) => void;
  removeItem: (id: string) => void;
  updateQuantity: (id: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

