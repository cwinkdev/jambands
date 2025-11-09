import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function About() {
  return (
    <>
      <Navbar />

      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              Who? Us?
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
                  We&apos;re two friends with a shared passion for learning, creating, and building something meaningful.
                  After years in traditional jobs, we always dreamed of working for ourselves and escaping the daily grind
                  to pursue our entrepreneurial vision.
                </p>
                <p className="text-gray-300 mb-4">
                  Everything changed one night at a dubstep concert. As we watched the incredible light show, we noticed
                  something missing – there weren&apos;t any truly stunning RGB wearables that looked cool and eye-catching.
                  The crowd was amazing, but imagine if everyone could be part of the visual experience.
                </p>
                <p className="text-gray-300 mb-4">
                  We saw this as our opportunity. Why not invent our own wearable? We dove headfirst into creating RGB
                  wristbands, iterating design after design, learning everything from electronics to user experience along the way.
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
                      <h3 className="text-lg font-semibold text-white">Passion Project</h3>
                      <p className="text-gray-300 text-sm">Born from creativity and entrepreneurial spirit</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Music Inspired</h3>
                      <p className="text-gray-300 text-sm">Created by music lovers for unforgettable experiences</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mr-4">
                      <svg className="w-6 h-6 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-white">Quality Design</h3>
                      <p className="text-gray-300 text-sm">Designed and crafted to look visually stunning</p>
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
                  <h3 className="text-xl font-bold text-white mb-4">Halo II</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    An enhanced portable lighting experience featuring wireless freedom, extended battery life,
                    and our signature custom visual effects library.
                  </p>
                  <div className="bg-accent/20 text-accent px-3 py-1 rounded-full text-xs font-medium inline-block">
                    In Progress
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4">Wristband Revolution</h3>
                  <p className="text-gray-300 text-sm mb-4">
                    Revolutionary wearable RGB technology that transforms entire festival crowds into
                    synchronized displays of light, creating unprecedented collective experiences.
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