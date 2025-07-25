import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Logo from './components/Logo';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative min-h-screen px-4 py-16 lg:pb-12 sm:px-6 lg:px-8 lg:py-24">
          <div className="mx-auto pt-16 max-w-7xl text-center">
            <div className="mb-12 flex justify-center">
              <Logo variant="light" size="xl" className="glow-rgb scale-200" />
            </div>

            <h1 className="text-4xl pt-8 font-light tracking-tight text-white sm:text-5xl lg:text-7xl">
              Get{' '}
              <span className="text-gradient-rgb-animated glow-rgb">Lit</span>
            </h1>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-300 sm:text-xl">
              The future of lighting for festivals, nightlife, and beyond.
            </p>
            <div className="mt-24 flex flex-col sm:flex-row gap-1 justify-center">
              <Link href="/lamps" className="border-gradient-rgb hover:bg-white/10 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-300 hover:scale-105">
                Explore Our Products
              </Link>
            </div>
          </div>
        </section>






      </main>

      <Footer />
    </>
  );
}
