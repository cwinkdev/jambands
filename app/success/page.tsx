'use client';

import { useEffect, useRef, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';
import { useCart } from '../context/CartContext';

function SuccessContent() {
  const searchParams = useSearchParams();
  const { clearCart } = useCart();
  const sessionId = searchParams.get('session_id');
  const hasClearedCart = useRef(false);

  // Clear cart when success page loads (payment completed) - only once
  useEffect(() => {
    if (sessionId && !hasClearedCart.current) {
      clearCart();
      hasClearedCart.current = true;
    }
  }, [sessionId]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Success Section */}
        <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center" aria-hidden="true">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Payment Successful!
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-8">
              Thank you for your purchase! Your Halo lamp is on its way.
              You&apos;ll receive a confirmation email shortly with tracking information.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lamps/halo"
                className="border-gradient-rgb hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105"
              >
                Continue Shopping
              </Link>
              <Link
                href="/"
                className="bg-white/10 hover:bg-white/20 text-white font-semibold py-3 px-8 rounded-lg transition-colors"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default function Success() {
  return (
    <Suspense fallback={
      <>
        <Navbar />
        <main id="main-content" className="flex-1">
          <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 flex items-center justify-center">
            <div className="mx-auto max-w-2xl text-center">
              <div className="animate-pulse text-gray-400" role="status" aria-live="polite">
                Loading...
              </div>
            </div>
          </section>
        </main>
        <Footer />
      </>
    }>
      <SuccessContent />
    </Suspense>
  );
}