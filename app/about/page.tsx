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
            <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
              About <span className="text-gradient-rgb">JamBands</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300 sm:text-xl">
              We&apos;re passionate about creating unforgettable experiences through innovative LED technology and premium accessories.
            </p>
          </div>
        </section>

        {/* Story Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
                <p className="text-gray-300 mb-4">
                  Founded in 2024, JamBands emerged from a simple idea: every event deserves to be extraordinary.
                  We started as a small team of tech enthusiasts and event lovers who were tired of boring,
                  static lighting solutions.
                </p>
                <p className="text-gray-300 mb-4">
                  Our breakthrough came when we developed LED wristbands that could sync perfectly with music,
                  creating immersive light shows that turn any crowd into a unified, glowing experience.
                </p>
                <p className="text-gray-300">
                  Today, we&apos;re proud to serve thousands of event organizers, from intimate parties to
                  massive concerts, helping them create moments that people remember forever.
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
                      <p className="text-gray-300 text-sm">Cutting-edge LED technology</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Customer Love</h3>
                      <p className="text-gray-300 text-sm">Your success is our mission</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Quality Promise</h3>
                      <p className="text-gray-300 text-sm">Premium materials, lasting memories</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8 bg-black/20">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-3xl font-bold text-white mb-8">Our Mission</h2>
            <p className="text-xl text-gray-300 mb-8">
              To transform ordinary events into extraordinary experiences through innovative LED technology,
              bringing people together in moments of shared wonder and joy.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-rgb mb-2">10K+</div>
                <p className="text-gray-300">Events Illuminated</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-rgb mb-2">500K+</div>
                <p className="text-gray-300">People Connected</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-gradient-rgb mb-2">99%</div>
                <p className="text-gray-300">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-3xl font-bold text-center text-white mb-12">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 bg-gradient-rgb rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Alex Chen</h3>
                <p className="text-accent mb-2">CEO & Founder</p>
                <p className="text-gray-300 text-sm">Former tech lead at major events company. Passionate about creating magical experiences.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 bg-gradient-rgb rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Sarah Rodriguez</h3>
                <p className="text-accent mb-2">CTO</p>
                <p className="text-gray-300 text-sm">LED technology expert with 10+ years in hardware development and music synchronization.</p>
              </div>
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 text-center hover:bg-white/10 transition-colors">
                <div className="w-20 h-20 bg-gradient-rgb rounded-full mx-auto mb-4"></div>
                <h3 className="text-lg font-semibold text-white mb-2">Marcus Johnson</h3>
                <p className="text-accent mb-2">Head of Design</p>
                <p className="text-gray-300 text-sm">Award-winning designer who ensures every product is both beautiful and functional.</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}