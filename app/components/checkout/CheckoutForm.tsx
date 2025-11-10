'use client';

import { useState } from 'react';
import ShippingAddressForm from './ShippingAddressForm';
import { ShippingAddress, ShippingRate } from '@/app/api/types';
import { CartItem } from '@/app/types/cart';

interface CheckoutFormProps {
  items: CartItem[]; // Cart items array
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

type CheckoutStep = 'address' | 'shipping' | 'review';

export default function CheckoutForm({
  items,
  onError
}: CheckoutFormProps) {
  const [step, setStep] = useState<CheckoutStep>('address');
  const [shippingAddress, setShippingAddress] = useState<ShippingAddress | null>(null);
  const [shippingRates, setShippingRates] = useState<ShippingRate[]>([]);
  const [selectedShippingRate, setSelectedShippingRate] = useState<ShippingRate | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isCalculatingShipping, setIsCalculatingShipping] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  // Calculate totals
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleAddressSubmit = async (address: ShippingAddress) => {
    setIsCalculatingShipping(true);
    setMessage(null);
    setShippingAddress(address);

    try {
      const response = await fetch('/api/calculate-shipping', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          address,
          items: items.map(item => ({
            productId: item.productId,
            quantity: item.quantity,
          })),
        }),
      });

      const data = await response.json();

      if (data.rates && data.rates.length > 0) {
        setShippingRates(data.rates);
        // Auto-select cheapest option
        setSelectedShippingRate(data.rates[0]);
        setStep('shipping');

        // Show warning if error exists, but don't block progression
        if (data.error) {
          setMessage(`Warning: ${data.error}`);
        }
      } else {
        // Only set this message if we don't already have an error message
        if (data.error) {
          setMessage(`Warning: ${data.error}`);
        } else {
          setMessage('No shipping rates available. Please try again.');
        }
      }
    } catch {
      setMessage('Failed to calculate shipping. Please try again.');
      onError?.('Failed to calculate shipping');
    } finally {
      setIsCalculatingShipping(false);
    }
  };

  const handleShippingSelect = (rate: ShippingRate) => {
    setSelectedShippingRate(rate);
    setStep('review');
  };

  const handleCheckout = async () => {
    if (!selectedShippingRate || !shippingAddress) {
      setMessage('Please complete shipping information');
      return;
    }

    setIsLoading(true);
    setMessage(null);

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          items,
          shippingCost: selectedShippingRate.amount,
          shippingAddress,
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

  const totalAmount = selectedShippingRate ? subtotal + selectedShippingRate.amount : subtotal;

  return (
    <div className="max-w-md mx-auto">
      <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
        {/* Step indicator */}
        <div className="flex items-center justify-center mb-6">
          <div className="flex items-center space-x-2">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              step === 'address' ? 'bg-accent text-white' : 'bg-white/20 text-white'
            }`}>
              1
            </div>
            <div className={`h-1 w-8 ${step !== 'address' ? 'bg-white/20' : 'bg-white/10'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              step === 'shipping' ? 'bg-accent text-white' :
              step === 'review' ? 'bg-white/20 text-white' :
              'bg-white/10 text-gray-400'
            }`}>
              2
            </div>
            <div className={`h-1 w-8 ${step === 'review' ? 'bg-white/20' : 'bg-white/10'}`} />
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
              step === 'review' ? 'bg-accent text-white' : 'bg-white/10 text-gray-400'
            }`}>
              3
            </div>
          </div>
        </div>

        <h3 className="text-lg font-semibold text-white mb-4">
          {step === 'address' && 'Shipping Address'}
          {step === 'shipping' && 'Select Shipping Method'}
          {step === 'review' && 'Review & Complete Purchase'}
        </h3>

        {message && (
          <div className={`mb-4 p-3 border rounded-lg ${
            message.includes('Warning') || message.includes('fallback')
              ? 'bg-yellow-500/20 border-yellow-500/30'
              : 'bg-red-500/20 border-red-500/30'
          }`}>
            <p className={`text-sm ${
              message.includes('Warning') || message.includes('fallback')
                ? 'text-yellow-300'
                : 'text-red-300'
            }`}>
              {message}
            </p>
          </div>
        )}

        {/* Step 1: Address Form */}
        {step === 'address' && (
          <ShippingAddressForm
            onAddressSubmit={handleAddressSubmit}
            isLoading={isCalculatingShipping}
          />
        )}

        {/* Step 2: Shipping Options */}
        {step === 'shipping' && (
          <div className="space-y-4">
            <div className="text-sm text-gray-300 mb-4">
              Shipping to: {shippingAddress?.city}, {shippingAddress?.state}
            </div>
            <div className="space-y-2">
              {shippingRates.map((rate) => (
                <button
                  key={rate.rateId}
                  type="button"
                  onClick={() => handleShippingSelect(rate)}
                  className={`w-full p-4 rounded-lg border text-left transition-all focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent ${
                    selectedShippingRate?.rateId === rate.rateId
                      ? 'border-white/30 bg-white/10'
                      : 'border-white/10 hover:border-white/20 hover:bg-white/5'
                  }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-white font-semibold">{rate.service}</div>
                      <div className="text-gray-400 text-sm">{rate.carrier}</div>
                      {rate.estimatedDays && (
                        <div className="text-gray-500 text-xs mt-1">
                          Estimated {rate.estimatedDays} business days
                        </div>
                      )}
                    </div>
                    <div className="text-white font-bold text-lg">
                      ${(rate.amount / 100).toFixed(2)}
                    </div>
                  </div>
                </button>
              ))}
            </div>
            <button
              type="button"
              onClick={() => setStep('address')}
              className="w-full text-gray-400 hover:text-white text-sm mt-4 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ← Back to address
            </button>
          </div>
        )}

        {/* Step 3: Review */}
        {step === 'review' && (
          <div className="space-y-4">
            <div className="space-y-2 p-4 bg-white/5 rounded-lg">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between items-center text-gray-300 text-sm">
                  <span>{item.productName} × {item.quantity}</span>
                  <span className="text-white">${((item.price * item.quantity) / 100).toFixed(2)}</span>
                </div>
              ))}
              <div className="flex justify-between items-center text-gray-300 pt-2 border-t border-white/10">
                <span>Subtotal:</span>
                <span className="text-white">${(subtotal / 100).toFixed(2)}</span>
              </div>
              {selectedShippingRate && (
                <div className="flex justify-between items-center text-gray-300">
                  <span>Shipping ({selectedShippingRate.service}):</span>
                  <span className="text-white">${(selectedShippingRate.amount / 100).toFixed(2)}</span>
                </div>
              )}
              <div className="border-t border-white/10 pt-2 mt-2">
                <div className="flex justify-between items-center text-gray-300">
                  <span className="font-semibold">Total:</span>
                  <span className="text-xl font-bold text-white">${(totalAmount / 100).toFixed(2)}</span>
                </div>
              </div>
            </div>

            <button
              onClick={handleCheckout}
              disabled={isLoading}
              className="w-full border-gradient-rgb hover:bg-white/10 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:border-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb"
              type="button"
            >
              {isLoading ? 'Redirecting to Stripe...' : 'Continue to Stripe Checkout'}
            </button>

            <button
              type="button"
              onClick={() => setStep('shipping')}
              className="w-full text-gray-400 hover:text-white text-sm mt-2 focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent"
            >
              ← Back to shipping options
            </button>

            <div className="bg-blue-500/20 border border-blue-500/30 rounded-lg p-3 mt-3">
              <p className="text-xs text-blue-300 text-center">
                <strong>Note:</strong> Clicking above will redirect you to Stripe Checkout where you&apos;ll securely enter your payment information to complete the purchase.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}