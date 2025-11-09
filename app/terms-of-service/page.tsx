import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function TermsOfServicePage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">JamBands LLC</p>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                Terms of Service
              </h1>
              <p className="text-gray-300">
                Effective Date: November 9, 2025 · Last Updated: November 9, 2025
              </p>
            </div>

            <div className="space-y-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Overview</h2>
                <p className="text-gray-300">
                  These Terms of Service (&ldquo;Terms&rdquo;) govern your use of https://jambands.net/ and your purchase
                  of products from JamBands LLC (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By visiting our
                  site or placing an order, you agree to these Terms.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Products and Orders</h2>
                <p className="text-gray-300">
                  We strive to ensure all product descriptions and pricing are accurate. We reserve the right to correct
                  errors, update product information, or cancel orders if necessary.
                </p>
                <p className="text-gray-300">
                  We may decline or cancel orders for reasons such as suspected fraud, supply limitations, or pricing
                  errors.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Pricing and Payment</h2>
                <p className="text-gray-300">All prices are listed in U.S. Dollars (USD).</p>
                <p className="text-gray-300">
                  Payments are processed securely through Stripe, Inc. We do not access or store full payment details.
                </p>
                <p className="text-gray-300">
                  By submitting payment, you confirm you are authorized to use the provided payment method.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Shipping and Delivery</h2>
                <p className="text-gray-300">We currently ship only within the United States.</p>
                <p className="text-gray-300">
                  Shipping rates and delivery estimates are shown at checkout.
                </p>
                <p className="text-gray-300">
                  JamBands LLC is not responsible for shipping delays, carrier errors, or delivery issues caused by
                  incorrect addresses or circumstances beyond our control.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Returns and Refunds</h2>
                <p className="text-gray-300">We accept returns only for verified manufacturing defects.</p>
                <p className="text-gray-300">
                  If you believe your item is defective, email business@jambands.net within 30 days of receiving your
                  order. You must ship the product back to us for inspection (customer pays return shipping).
                </p>
                <p className="text-gray-300">
                  If we confirm a manufacturing defect, we’ll issue a full refund to your original payment method.
                </p>
                <p className="text-gray-300">
                  Returned products must be in original condition and packaging. Items damaged by misuse, modification,
                  or normal wear are not eligible for refund.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Product Warranty</h2>
                <p className="text-gray-300">
                  Our products are sold &ldquo;as is&rdquo; without any express or implied warranties, except those
                  required by applicable law. We do not guarantee that products will meet your specific expectations or
                  perform without interruption.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Intellectual Property</h2>
                <p className="text-gray-300">
                  All content on this site — including images, text, logos, and designs — is owned by or licensed to
                  JamBands LLC. You may not copy, reproduce, or use any content without our written permission.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Limitation of Liability</h2>
                <p className="text-gray-300">
                  To the fullest extent permitted by law, JamBands LLC is not liable for any indirect, incidental, or
                  consequential damages arising from your use of our site or products.
                </p>
                <p className="text-gray-300">
                  Your sole remedy for any defective product is limited to a refund as outlined above.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Governing Law</h2>
                <p className="text-gray-300">
                  These Terms are governed by the laws of the State of Georgia, without regard to conflict-of-law rules.
                  Any disputes shall be resolved in the state or federal courts located in Georgia, USA.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Contact</h2>
                <p className="text-gray-300">For questions about these Terms, contact us at:</p>
                <p className="text-gray-300">📧 business@jambands.net</p>
                <div className="text-gray-300 space-y-1">
                  <p>📬 JamBands LLC</p>
                  <p>c/o Northwest Registered Agent Service, Inc.</p>
                  <p>8735 Dunwoody Place, Ste N</p>
                  <p>Atlanta, GA 30350, USA</p>
                </div>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

