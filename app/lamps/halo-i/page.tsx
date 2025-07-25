'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import CheckoutForm from '../../components/checkout/CheckoutForm';
import { haloI } from '../../data/products';

export default function HaloI() {
  const product = haloI;
  const [showCheckout, setShowCheckout] = useState(false);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isCreatingPayment, setIsCreatingPayment] = useState(false);
  const [quantity, setQuantity] = useState(1);

  const handleBuyNow = async () => {
    console.log('Buy Now button clicked!'); // Debug log
    setIsCreatingPayment(true);
    try {
      console.log('Creating payment intent for:', {
        amount: Math.round(product.price * quantity * 100),
        currency: 'usd',
        productId: product.id,
      }); // Debug log

      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount: Math.round(product.price * quantity * 100), // Convert to cents
          currency: 'usd',
          productId: product.id,
        }),
      });

            const data = await response.json();
      console.log('API response:', data); // Debug log

      if (data.clientSecret) {
        console.log('Payment intent created successfully'); // Debug log
        setClientSecret(data.clientSecret);
        setShowCheckout(true);
      } else {
        console.error('No client secret in response:', data); // Debug log
        alert('Failed to create payment. Please try again.');
      }
    } catch (error) {
      console.error('Error creating payment:', error);
      alert('Failed to create payment. Please try again.');
    } finally {
      setIsCreatingPayment(false);
    }
  };

  const handlePaymentSuccess = () => {
    setShowCheckout(false);
    // You could redirect to a success page or show a success message
    alert('Payment successful! Thank you for your purchase.');
  };

  const handlePaymentError = (error: string) => {
    console.error('Payment error:', error);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient-rgb-animated">{product.title}</span>
            </h1>

          </div>
        </section>

        {/* Product Showcase */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
              {/* Product Image */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-64 h-64 bg-gradient-rgb-animated rounded-xl mx-auto mb-6 glow-rgb flex items-center justify-center">
                  <span className="text-outlined-light font-semibold text-lg">{product.name}</span>
                </div>
              </div>

              {/* Product Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Section */}
              <div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{product.name} Lamp</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">${product.price}</span>
                    <p className="text-xs text-gray-400 mt-1">{product.shipping}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-sm">Quantity:</span>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => setQuantity(Math.max(1, quantity - 1))}
                          className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
                        >
                          <span className="text-white">-</span>
                        </button>
                        <span className="text-white font-semibold min-w-[20px] text-center">{quantity}</span>
                        <button
                          onClick={() => setQuantity(quantity + 1)}
                          className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm"
                        >
                          <span className="text-white">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button
                      onClick={handleBuyNow}
                      disabled={isCreatingPayment}
                      className="w-full border-gradient-rgb hover:bg-white/10 disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-300 hover:scale-105"
                    >
                      {isCreatingPayment ? 'Processing...' : `Buy Now - $${(product.price * quantity).toFixed(2)}`}
                    </button>
                  </div>

                  <div className="text-xs text-gray-400 space-y-1">
                    {product.warranty.map((item, index) => (
                      <p key={index}>✓ {item}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Checkout Modal */}
        {showCheckout && clientSecret && (
          <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-xl p-6 max-w-md w-full max-h-[90vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-white">Complete Your Purchase</h2>
                <button
                  onClick={() => setShowCheckout(false)}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

              <div className="mb-4 p-4 bg-white/5 rounded-lg">
                <div className="flex justify-between items-center text-sm text-gray-300">
                  <span>{product.name} × {quantity}</span>
                  <span>${(product.price * quantity).toFixed(2)}</span>
                </div>
              </div>

              <CheckoutForm
                clientSecret={clientSecret}
                amount={Math.round(product.price * quantity * 100)}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
            </div>
          </div>
        )}
      </main>

      <Footer />
    </>
  );
}