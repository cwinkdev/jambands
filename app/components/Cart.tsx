'use client';

import { useState } from 'react';
import { useCart } from '../context/CartContext';
import CheckoutForm from './checkout/CheckoutForm';

interface CartProps {
  onClose: () => void;
  onCheckout: () => void;
}

export default function Cart({ onClose, onCheckout }: CartProps) {
  const { items, removeItem, updateQuantity, getTotal, getItemCount } = useCart();

  const total = getTotal();
  const itemCount = getItemCount();

  return (
    <div className="fixed inset-0 z-50 flex">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Cart Panel */}
      <div className="relative ml-auto flex h-full w-full max-w-md flex-col bg-gray-900 shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <h2 className="text-lg font-semibold text-white">
            Shopping Cart ({itemCount})
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Close cart"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center">
              <svg className="w-16 h-16 text-gray-600 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-gray-400 text-lg">Your cart is empty</p>
            </div>
          ) : (
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex items-center gap-4 border-b border-white/10 pb-4">
                  <div className="flex-1">
                    <h3 className="text-white font-semibold">{item.productName}</h3>
                    {item.colorName && (
                      <p className="text-gray-400 text-sm">Color: {item.colorName}</p>
                    )}
                    <p className="text-white mt-1">${(item.price / 100).toFixed(2)}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label={`Decrease quantity of ${item.productName}`}
                    >
                      <span className="text-white">-</span>
                    </button>
                    <span className="text-white w-8 text-center">{item.quantity}</span>
                    <button
                      type="button"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-white/10 rounded flex items-center justify-center hover:bg-white/20 transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label={`Increase quantity of ${item.productName}`}
                    >
                      <span className="text-white">+</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="ml-2 text-gray-400 hover:text-red-400 transition-colors focus-visible:ring-2 focus-visible:ring-red-400 focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
                      aria-label={`Remove ${item.productName} from cart`}
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-white/10 px-6 py-4 space-y-4">
            <div className="flex justify-between items-center text-lg">
              <span className="text-gray-300">Total:</span>
              <span className="text-white font-bold text-xl">${(total / 100).toFixed(2)}</span>
            </div>
            <button
              type="button"
              onClick={onCheckout}
              className="w-full border-gradient-rgb hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            >
              Proceed to Checkout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Cart Button Component
export function CartButton() {
  const { getItemCount } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const itemCount = getItemCount();

  return (
    <>
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        className="relative p-2 text-white hover:bg-white/10 rounded-lg transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
        aria-label={`Open cart${itemCount > 0 ? ` (${itemCount} items)` : ''}`}
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
        </svg>
        {itemCount > 0 && (
          <span
            className="absolute -top-1 -right-1 bg-accent text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center"
            aria-live="polite"
            role="status"
          >
            {itemCount}
          </span>
        )}
      </button>
      {isOpen && <CartWrapper onClose={() => setIsOpen(false)} />}
    </>
  );
}

// Wrapper component to manage cart state
function CartWrapper({ onClose }: { onClose: () => void }) {
  const [showCheckout, setShowCheckout] = useState(false);
  const { items, clearCart } = useCart();

  const handleCheckout = () => {
    if (items.length === 0) return;
    setShowCheckout(true);
  };

  const handleClose = () => {
    onClose();
    setShowCheckout(false);
  };

  if (!showCheckout) {
    return <Cart onClose={handleClose} onCheckout={handleCheckout} />;
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Complete Your Purchase</h2>
          <button
            type="button"
            onClick={handleClose}
            className="text-gray-400 hover:text-white transition-colors focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900"
            aria-label="Close checkout"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        <div className="mb-4 p-4 bg-white/5 rounded-lg space-y-2">
          {items.map((item) => (
            <div key={item.id} className="flex justify-between items-center text-sm text-gray-300">
              <span>{item.productName} {item.colorName && `(${item.colorName})`} × {item.quantity}</span>
              <span>${((item.price * item.quantity) / 100).toFixed(2)}</span>
            </div>
          ))}
          <div className="flex justify-between items-center text-white font-semibold pt-2 border-t border-white/10">
            <span>Subtotal:</span>
            <span>${(items.reduce((sum, item) => sum + item.price * item.quantity, 0) / 100).toFixed(2)}</span>
          </div>
        </div>

        <CheckoutForm
          items={items}
          onSuccess={() => {
            clearCart();
            handleClose();
          }}
          onError={(error) => console.error('Checkout error:', error)}
        />
      </div>
    </div>
  );
}
