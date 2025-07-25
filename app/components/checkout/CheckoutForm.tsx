'use client';

import { useState } from 'react';
import {
  useStripe,
  useElements,
  PaymentElement,
  Elements
} from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';

// Make sure to call `loadStripe` outside of a component's render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);

interface CheckoutFormProps {
  clientSecret: string;
  amount: number;
  onSuccess?: () => void;
  onError?: (error: string) => void;
}

function CheckoutFormContent({ amount, onSuccess, onError }: Omit<CheckoutFormProps, 'clientSecret'>) {
  const stripe = useStripe();
  const elements = useElements();
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    setIsLoading(true);
    setMessage(null);

    const { error } = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: `${window.location.origin}/success`,
      },
    });

    if (error) {
      if (error.type === 'card_error' || error.type === 'validation_error') {
        setMessage(error.message || 'An error occurred');
        onError?.(error.message || 'An error occurred');
      } else {
        setMessage('An unexpected error occurred.');
        onError?.('An unexpected error occurred.');
      }
    } else {
      onSuccess?.();
    }

    setIsLoading(false);
  };

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
          <h3 className="text-lg font-semibold text-white mb-4">Payment Details</h3>
          <div className="mb-4">
                        <PaymentElement />
          </div>

          {message && (
            <div className="mb-4 p-3 bg-red-500/20 border border-red-500/30 rounded-lg">
              <p className="text-red-300 text-sm">{message}</p>
            </div>
          )}

          <div className="flex justify-between items-center mb-4 text-gray-300">
            <span>Total:</span>
            <span className="text-xl font-bold text-white">${(amount / 100).toFixed(2)}</span>
          </div>

          <button
            disabled={isLoading || !stripe || !elements}
            className="w-full border-gradient-rgb hover:bg-white/10 disabled:bg-gray-600 disabled:cursor-not-allowed disabled:border-gray-600 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb"
          >
            {isLoading ? 'Processing...' : 'Purchase'}
          </button>
        </div>
      </form>
    </div>
  );
}

export default function CheckoutForm(props: CheckoutFormProps) {
  const options = {
    clientSecret: props.clientSecret,
    appearance: {
      theme: 'night' as const,
      variables: {
        colorPrimary: '#ff277e', // Using your accent color
        colorBackground: '#2a2a2a', // Warmer neutral gray
        colorText: '#f5f5f5', // Brighter white text
        colorTextSecondary: '#d1d5db', // Much brighter secondary text
        colorTextPlaceholder: '#9ca3af', // Placeholder text
        colorDanger: '#ef4444',
        colorSuccess: '#10b981',
        colorWarning: '#f59e0b',
        fontFamily: 'system-ui, sans-serif',
        spacingUnit: '4px',
        borderRadius: '8px',
        colorInputBorder: '#4a4a4a', // Lighter border
        colorInputBackground: '#2a2a2a', // Match main background
        colorLogo: '#ffffff',
      },
    },
  };

  return (
    <Elements options={options} stripe={stripePromise}>
      <CheckoutFormContent {...props} />
    </Elements>
  );
}