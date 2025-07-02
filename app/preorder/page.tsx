import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Preorder() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-4">
              <span className="bg-gradient-rgb text-white px-4 py-2 rounded-full text-sm font-semibold glow-rgb">
                ⚡ Early Bird Special - Save 30%
              </span>
            </div>
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Pre-Order the <span className="text-gradient-rgb-animated">Future</span> of Events
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              Be among the first to experience our revolutionary LED wristbands and lighting systems.
              Limited quantities available for early supporters.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-rgb-animated text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 glow-rgb-strong hover:scale-105">
                Pre-Order Now
              </button>
              <button className="border-gradient-rgb hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-lg transition-colors">
                Watch Demo
              </button>
            </div>
          </div>
        </section>

        {/* Product Showcase */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-white mb-4">
              What You&apos;ll Get
            </h2>
            <p className="text-center text-gray-300 mb-12">
              Premium LED accessories designed for the next generation of events
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">JamBand Pro Wristbands</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Real-time music synchronization</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">16.7 million color combinations</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">12-hour battery life</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Water-resistant design</span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                      <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-300">Mobile app control</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-32 h-32 bg-gradient-rgb-animated rounded-full mx-auto mb-6 glow-rgb"></div>
                <p className="text-gray-300">Interactive LED Wristband</p>
              </div>
            </div>
          </div>
        </section>

        {/* Pricing Tiers */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-black/20">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Pre-Order <span className="text-gradient-rgb">Packages</span>
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Starter Pack */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Starter Pack</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$149</span>
                  <span className="text-gray-300 line-through ml-2">$199</span>
                  <p className="text-sm text-accent mt-1">Save $50</p>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10 LED Wristbands
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Mobile App Access
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Basic Light Patterns
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Email Support
                  </li>
                </ul>
                <button className="w-full bg-white/10 hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Pre-Order Now
                </button>
              </div>

              {/* Pro Pack - Most Popular */}
              <div className="bg-white/5 backdrop-blur-sm border-2 border-accent rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300 relative">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-gradient-rgb text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Pro Pack</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$399</span>
                  <span className="text-gray-300 line-through ml-2">$549</span>
                  <p className="text-sm text-accent mt-1">Save $150</p>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    25 LED Wristbands
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    2 Smart Lamps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Premium App Features
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Music Sync Technology
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Priority Support
                  </li>
                </ul>
                <button className="w-full bg-gradient-rgb hover:bg-gradient-rgb-animated text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 glow-rgb">
                  Pre-Order Now
                </button>
              </div>

              {/* Enterprise Pack */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-white mb-4">Enterprise Pack</h3>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-white">$999</span>
                  <span className="text-gray-300 line-through ml-2">$1,399</span>
                  <p className="text-sm text-accent mt-1">Save $400</p>
                </div>
                <ul className="space-y-3 mb-8 text-left">
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    100 LED Wristbands
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    10 Smart Lamps
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Control Hub
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Custom Branding
                  </li>
                  <li className="flex items-center text-gray-300">
                    <svg className="w-4 h-4 text-accent mr-3" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Dedicated Support
                  </li>
                </ul>
                <button className="w-full bg-white/10 hover:bg-accent text-white font-semibold py-3 px-6 rounded-lg transition-colors">
                  Contact Sales
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Early Bird Benefits */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">
              Early Bird <span className="text-gradient-rgb">Benefits</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">30% Off</h3>
                <p className="text-gray-300 text-sm">Exclusive early bird pricing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">First Batch</h3>
                <p className="text-gray-300 text-sm">Priority shipping guarantee</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Exclusive Colors</h3>
                <p className="text-gray-300 text-sm">Limited edition designs</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Beta Access</h3>
                <p className="text-gray-300 text-sm">Early app features</p>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-black/20">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">
              Pre-Order Timeline
            </h2>
            <div className="space-y-8">
              <div className="flex items-center">
                <div className="w-4 h-4 bg-accent rounded-full mr-6"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Pre-Order Opens</h3>
                  <p className="text-gray-300">January 2025 - Early bird pricing available</p>
                </div>
                <div className="text-accent font-semibold">Now</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white/20 rounded-full mr-6"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">Production Begins</h3>
                  <p className="text-gray-300">March 2025 - Manufacturing starts</p>
                </div>
                <div className="text-gray-400">Q1 2025</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white/20 rounded-full mr-6"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">First Shipments</h3>
                  <p className="text-gray-300">May 2025 - Early bird orders ship first</p>
                </div>
                <div className="text-gray-400">Q2 2025</div>
              </div>
              <div className="flex items-center">
                <div className="w-4 h-4 bg-white/20 rounded-full mr-6"></div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white">General Availability</h3>
                  <p className="text-gray-300">July 2025 - Full retail launch</p>
                </div>
                <div className="text-gray-400">Q3 2025</div>
              </div>
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Don&apos;t Miss Out
            </h2>
            <p className="text-lg text-gray-300 mb-8">
              Limited quantities available. Secure your spot in the future of event lighting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-rgb-animated text-white font-semibold py-4 px-10 rounded-lg text-lg transition-all duration-300 glow-rgb-strong hover:scale-105">
                Pre-Order Now - Save 30%
              </button>
              <button className="border border-white/20 hover:bg-white/10 text-white font-semibold py-4 px-10 rounded-lg transition-colors">
                Join Waitlist
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}