import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto max-w-7xl text-center">
            <div className="mb-12 flex justify-center">
              <Logo variant="light" size="xl" className="glow-rgb scale-150" />
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Light Up Your{' '}
              <span className="text-gradient-rgb-animated glow-rgb">Night</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Premium LED wristbands, lamps, and accessories that sync to music and create unforgettable experiences. Perfect for concerts, parties, and events.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="border-gradient-rgb hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </section>

        {/* Product Categories */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              Our Products
            </h2>
            <div className="text-center mb-12">
              <span className="text-white text-lg font-medium">Experience the full spectrum of possibilities</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* LED Wristbands */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:border-gradient-rgb min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-8 h-8 transition-all duration-300" fill="none" viewBox="0 0 24 24">
                      <path className="stroke-gradient-rgb group-hover:stroke-gradient-rgb-animated transition-all duration-300" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">LED Wristbands</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Sync to music, customizable colors, and perfect for crowds. Create stunning light shows that pulse with the beat.
                  </p>
                  <button className="text-white hover:text-gray-300 font-medium transition-all duration-300 self-start">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Lamps */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:border-gradient-rgb min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-8 h-8 transition-all duration-300" fill="none" viewBox="0 0 24 24">
                      <path className="stroke-gradient-rgb group-hover:stroke-gradient-rgb-animated transition-all duration-300" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Smart Lamps</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Ambient lighting for any vibe. Set the mood with customizable colors and patterns that react to your environment.
                  </p>
                  <button className="text-white hover:text-gray-300 font-medium transition-all duration-300 self-start">
                    Learn More →
                  </button>
                </div>
              </div>

              {/* Accessories */}
              <div className="group relative overflow-hidden rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 p-8 hover:bg-white/10 transition-all duration-300 hover:border-gradient-rgb min-h-[320px] flex flex-col">
                <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-16 h-16 bg-white/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-8 h-8 transition-all duration-300" fill="none" viewBox="0 0 24 24">
                      <path className="stroke-gradient-rgb group-hover:stroke-gradient-rgb-animated transition-all duration-300" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-4">Accessories</h3>
                  <p className="text-gray-300 mb-6 flex-grow">
                    Glow sticks, badges, and more to make your night shine. Complete your setup with our premium accessories.
                  </p>
                  <button className="text-white hover:text-gray-300 font-medium transition-all duration-300 self-start">
                    Learn More →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to <span className="text-gradient-rgb">Light Up</span> Your Event?
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Join thousands of event organizers who trust JamBands for their lighting needs.
            </p>
            <button className="bg-white/10 hover:bg-white/20 text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 hover:scale-105 border border-white/20">
              Get Started Today
            </button>
        </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
