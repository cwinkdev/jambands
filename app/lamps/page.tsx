import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Link from 'next/link';

export default function Lamps() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-20 pb-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl text-center">
            <h1 className="text-4xl font-extralight tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
              <span className="text-gradient-rgb-animated">Halo</span> Collection
            </h1>
            <p className="mx-auto max-w-3xl text-lg text-gray-300">
              These desktop lamps showcase the RGB technology we&apos;re perfecting for festival wristbands – turning our development process into something beautiful for your space.
            </p>
          </div>
        </section>

        {/* Featured Product - Halo I */}
        <section className="px-4 py-16 pt-0 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            {/* Main Featured Product */}
            <Link href="/lamps/halo-i" className="group block">
              <div className="p-12 text-center relative overflow-hidden">

                <div className="w-64 h-64 bg-gradient-rgb-animated rounded-2xl mx-auto mb-8 glow-rgb flex items-center justify-center group-hover:glow-rgb-strong transition-all duration-300">
                  <span className="text-outlined-light font-bold text-2xl">Halo I</span>
                </div>
                <h2 className="text-3xl font-bold text-white mb-4">Halo I</h2>
                <p className="text-gray-300 mb-6 text-lg max-w-lg mx-auto">
                  14 RGB LEDs, dozens of effects, USB-C powered.
                </p>
                <div className="flex items-center justify-center gap-6">
                  <span className="text-4xl font-bold text-white">$9.99</span>
                  <div className="flex items-center text-accent text-lg font-semibold">
                    <span>Shop Now</span>
                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </div>
            </Link>

            {/* Future Products Preview */}
            <div className="mt-16">
              <h3 className="text-xl font-semibold text-center text-white mb-8">Coming Soon</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center opacity-60">
                  <div className="w-32 h-32 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-semibold">Halo II</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">Halo II</h4>
                  <p className="text-gray-400 text-sm mb-3">Rechargeable & mobile</p>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block">
                    Coming Soon
                  </div>
                </div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center opacity-60">
                  <div className="w-32 h-32 bg-white/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                    <span className="text-gray-400 font-semibold">Wristbands</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-2">RGB Wristbands</h4>
                  <p className="text-gray-400 text-sm mb-3">The main event</p>
                  <div className="bg-gray-500/20 text-gray-500 px-3 py-1 rounded-full text-xs font-medium inline-block">
                    Coming 2025
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


      </main>

      <Footer />
    </>
  );
}