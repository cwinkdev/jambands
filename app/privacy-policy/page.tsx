import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function PrivacyPolicyPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">JamBands LLC</p>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="text-gray-300">
                Effective Date: November 9, 2025 · Last Updated: November 9, 2025
              </p>
            </div>

            <div className="space-y-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Who We Are</h2>
                <p className="text-gray-300">
                  This website (&ldquo;Site&rdquo;) is operated by JamBands LLC, a Georgia limited liability
                  company (&ldquo;we,&rdquo; &ldquo;us,&rdquo; or &ldquo;our&rdquo;).
                </p>
                <div className="text-gray-300 space-y-2">
                  <p className="font-semibold text-white/90">Mailing Address</p>
                  <p>JamBands LLC</p>
                  <p>c/o Northwest Registered Agent Service, Inc.</p>
                  <p>8735 Dunwoody Place, Ste N</p>
                  <p>Atlanta, GA 30350, USA</p>
                </div>
                <div className="text-gray-300 space-y-2">
                  <p className="font-semibold text-white/90">Website</p>
                  <p>https://jambands.net/</p>
                  <p className="font-semibold text-white/90">Email</p>
                  <p>business@jambands.net</p>
                </div>
                <p className="text-gray-300">
                  We design, assemble, and sell custom physical products through this website.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Information We Collect</h2>
                <p className="text-gray-300">
                  We collect only the information necessary to process and fulfill your orders, including:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Contact details (name, email address, phone number, and shipping address)</li>
                  <li>
                    Payment information (processed securely by Stripe; we never see or store your full payment details)
                  </li>
                </ul>
                <p className="text-gray-300">
                  We do not currently use cookies, analytics, or tracking pixels.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">How We Use Information</h2>
                <p className="text-gray-300">We use your information solely to:</p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Process and fulfill your orders</li>
                  <li>Communicate with you regarding your order</li>
                  <li>Provide customer support</li>
                  <li>Comply with legal and tax obligations</li>
                </ul>
                <p className="text-gray-300">
                  We do not sell, rent, or share your information with marketers.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Sharing Information</h2>
                <p className="text-gray-300">
                  We share limited information only with trusted third parties:
                </p>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Stripe, Inc. for payment processing (Stripe Privacy Policy)</li>
                  <li>Shipping carriers such as USPS, UPS, or FedEx for order delivery</li>
                </ul>
                <p className="text-gray-300">
                  These partners receive only the information necessary to complete their services.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Data Retention</h2>
                <p className="text-gray-300">
                  We retain your order details for our business records unless and until you ask us to delete them,
                  except where retention is required by law (e.g., tax documentation).
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Security</h2>
                <p className="text-gray-300">
                  We use secure, encrypted connections (HTTPS) and trusted third-party processors to protect your data.
                  However, no system is completely secure, and we cannot guarantee absolute protection.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Your Rights</h2>
                <p className="text-gray-300">
                  You may request a copy of, correction to, or deletion of your personal data by contacting
                  business@jambands.net. We’ll respond within a reasonable time.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Cookies and Analytics</h2>
                <p className="text-gray-300">
                  We currently do not use cookies or analytics. If we add tools such as Google Analytics in the future,
                  we will update this policy and provide notice on our site.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">International Users</h2>
                <p className="text-gray-300">
                  We currently sell and ship only within the United States. If we expand internationally, this policy
                  will be updated.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Updates to This Policy</h2>
                <p className="text-gray-300">
                  We may update this Privacy Policy periodically. The latest version will always be posted on this page.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-white">Contact</h2>
                <p className="text-gray-300">
                  For questions about this Privacy Policy, please contact:
                </p>
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

