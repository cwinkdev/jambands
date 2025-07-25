import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import { haloI } from '../../data/products';

export default function HaloI() {
  const product = haloI;

  return (
    <>
      <Navbar />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-4xl font-light tracking-tight text-white sm:text-5xl lg:text-6xl">
              <span className="text-gradient-rgb-animated">{product.title}</span>
            </h1>

          </div>
        </section>

        {/* Product Showcase */}
        <section className="px-4 py-16 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mb-16">
              {/* Product Image */}
              <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8 text-center">
                <div className="w-64 h-64 bg-gradient-rgb-animated rounded-xl mx-auto mb-6 glow-rgb flex items-center justify-center">
                  <span className="text-outlined-light font-semibold text-lg">{product.name}</span>
                </div>
              </div>

              {/* Product Features */}
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">Features</h3>
                <ul className="space-y-4">
                  {product.features.map((feature) => (
                    <li key={feature.id} className="flex items-start">
                      <div className="w-6 h-6 bg-accent/20 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-accent" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-gray-300">{feature.text}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Purchase Section */}
              <div>
                <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-4">{product.name} Lamp</h3>
                  <div className="mb-6">
                    <span className="text-3xl font-bold text-white">${product.price}</span>
                    <p className="text-xs text-gray-400 mt-1">{product.shipping}</p>
                  </div>

                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between items-center text-gray-300">
                      <span className="text-sm">Quantity:</span>
                      <div className="flex items-center space-x-2">
                        <button className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm">
                          <span className="text-white">-</span>
                        </button>
                        <span className="text-white font-semibold min-w-[20px] text-center">1</span>
                        <button className="w-7 h-7 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors text-sm">
                          <span className="text-white">+</span>
                        </button>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 mb-6">
                    <button className="w-full border-gradient-rgb hover:bg-white/10 text-white font-semibold py-3 px-4 rounded-lg text-sm transition-all duration-300 hover:scale-105">
                      Add to Cart
                    </button>
                    <button className="w-full bg-accent hover:bg-accent/80 text-white font-semibold py-3 px-4 rounded-lg transition-colors text-sm">
                      Buy Now
                    </button>
                  </div>

                  <div className="text-xs text-gray-400 space-y-1">
                    {product.warranty.map((item, index) => (
                      <p key={index}>✓ {item}</p>
                    ))}
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