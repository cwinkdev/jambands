import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Success() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Success Section */}
        <section className="relative px-4 py-16 lg:py-24 sm:px-6 lg:px-8 flex items-center justify-center">
          <div className="mx-auto max-w-2xl text-center">
            {/* Success Icon */}
            <div className="mb-8 flex justify-center">
              <div className="w-24 h-24 bg-green-500/20 rounded-full flex items-center justify-center">
                <svg className="w-12 h-12 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              Payment Successful!
            </h1>

            <p className="mx-auto max-w-2xl text-lg text-gray-300 mb-8">
              Thank you for your purchase! Your Halo I lamp is on its way.
              You&apos;ll receive a confirmation email shortly with tracking information.
            </p>

            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 mb-8">
              <h3 className="text-lg font-semibold text-white mb-4">What&apos;s Next?</h3>
              <div className="space-y-3 text-gray-300 text-sm">
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Processing your order (1-2 business days)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Shipping notification with tracking</span>
                </div>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-accent rounded-full mr-3"></div>
                  <span>Delivery within 2-3 business days</span>
                </div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/lamps"
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