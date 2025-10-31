'use client';

import { useState } from 'react';

interface CheckoutFormProps {
  amount: number;
  productId?: string;
  productName?: string;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

export default function CheckoutForm({
  amount,
  productId = 'halo',
  productName = 'HALO Lamp',
  onError
}: CheckoutFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleCheckout = async () => {
    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          productId,
          productName,
        }),
      });

      const data = await response.json();

      if (data.error) {
        setMessage(data.error);
        onError?.(data.error);
        return;
      }

      if (data.url) {
        // Redirect to Stripe Checkout
        window.location.href = data.url;
      } else {
        setMessage('No checkout URL received');
        onError?.('No checkout URL received');
      }
    } catch {
      const errorMessage = 'Failed to create checkout session';
      setMessage(errorMessage);
      onError?.(errorMessage);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        <h3 className="text-lg font-semibold text-white mb-4">Complete Purchase</h3>

        <div className="mb-6">
          <div className="flex justify-between items-center mb-2 text-gray-300">
            <span>Product:</span>
            <span className="text-white">{productName}</span>
          </div>
          <div className="flex justify-between items-center text-gray-300">
            <span>Total:</span>
            <span className="text-xl font-bold text-white">${(amount / 100).toFixed(2)}</span>
          </div>
        </div>

        {message && (
          <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
            <p className="text-red-300 text-sm">{message}</p>
          </div>
        )}

        <button
          onClick={handleCheckout}
          disabled={isLoading}
          className="w-full border-gradient-rgb hover:bg-white/10 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:border-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb"
        >
          {isLoading ? 'Redirecting to Checkout...' : 'Purchase'}
        </button>

        <p className="text-xs text-gray-400 mt-3 text-center">
          You&apos;ll be redirected to Stripe Checkout to complete your purchase securely
        </p>
      </div>
    </div>
  );
}