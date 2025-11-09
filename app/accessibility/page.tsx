import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

export default function AccessibilityPage() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl space-y-8">
            <div className="text-center space-y-4">
              <p className="text-sm uppercase tracking-[0.3em] text-gray-400">JamBands LLC</p>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
                Accessibility Statement
              </h1>
            </div>

            <div className="space-y-12 bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 sm:p-12">
              <section className="space-y-4">
                <p className="text-gray-300">
                  JamBands LLC is committed to ensuring digital accessibility for all people. We are continually improving
                  the user experience for everyone and applying relevant accessibility standards.
                </p>
                <p className="text-gray-300">
                  If you experience any difficulty accessing content on this website or notice any accessibility issues,
                  please contact us:
                </p>
                <p className="text-gray-300">📧 business@jambands.net</p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

