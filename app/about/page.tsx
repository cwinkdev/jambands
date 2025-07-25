import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Who Us?
            </h1>

          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 pt-8 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Journey</h2>
                <p className="text-gray-300 mb-4">
                  JamBands started with a vision: what if every person at a festival could become part of the light show?
                  We&apos;re developing revolutionary RGB wristbands that synchronize with music and events, turning entire
                  crowds into living, breathing displays of light and color.
                </p>
                <p className="text-gray-300 mb-4">
                  Our target markets span festivals, nightlife venues, and even kids&apos; events – anywhere people gather
                  to share experiences and create memories. Each wristband becomes a pixel in a massive, human-scale display.
                </p>
                <p className="text-gray-300 mb-4">
                  During our R&D process, we had some incredible components that didn&apos;t make it into the final wristband
                  design. Rather than waste them, we crafted the Halo I – a desktop lamp featuring 14 RGB LEDs in an ouroboros
                  pattern that showcases the light effects we&apos;re perfecting.
                </p>
                <p className="text-gray-300">
                  The Halo I is more than just a lamp; it&apos;s a preview of the magic we&apos;re bringing to wearable tech.
                  Every effect you see will eventually dance across thousands of wrists in perfect harmony.
                </p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Innovation First</h3>
                      <p className="text-gray-300 text-sm">Cutting-edge RGB wearable technology</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Crowd Connection</h3>
                      <p className="text-gray-300 text-sm">Uniting thousands through synchronized light</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Zero Waste</h3>
                      <p className="text-gray-300 text-sm">Every component finds purpose</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Future Vision */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">The Road Ahead</h2>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Halo II Development</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Our next lamp will be fully rechargeable, mobile, and feature custom light effects
                    that we design in-house.
                  </p>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block">
                    In Progress
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Wristband Revolution</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    The custom effects we create for Halo II will eventually power our RGB wristbands,
                    bringing festival crowds together like never before.
                  </p>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block">
                    Coming Soon
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