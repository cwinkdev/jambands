'use client';

import { useState } from 'react';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ProductGallery from '../../components/ProductGallery';
import ColorPicker from '../../components/ColorPicker';
import { useCart } from '../../context/CartContext';
import { haloI } from '../../data/products';

export default function HaloI() {
  const product = haloI;
  const { addItem } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedColor, setSelectedColor] = useState('standard-white');
  const [hoveredColor, setHoveredColor] = useState<string | null>(null);
  const [addedToCart, setAddedToCart] = useState(false);

  const colorOptions = [
    { id: 'standard-white', name: 'Standard White', color: '#ffffff' },
    { id: 'ice-blue-translucent', name: 'Ice Blue Translucent', color: '#b3e5fc' },
    { id: 'purple-translucent', name: 'Purple Translucent', color: '#ce93d8' },
    { id: 'jade-translucent', name: 'Jade Translucent', color: '#a5d6a7' },
    { id: 'orange-glow', name: 'Orange Glow', color: '#ffb74d' },
    { id: 'blue-green-pearl', name: 'Blue-Green Pearl', color: '#80cbc4' },
  ];

  // Map colors to their corresponding model images
  const colorImageMap = {
    'standard-white': 'front', // Standard white uses front image (white model)
    'ice-blue-translucent': 'light_blue_model',
    'purple-translucent': 'purple_model',
    'jade-translucent': 'jade_model',
    'orange-glow': 'orange_model',
    'blue-green-pearl': 'blue_green_model',
  };

  // Images in order: 1. set shot, 2. front view, 3. color variations, 4. models, 5. group image
  const productImages = [
    '/products/halo/images/set_shot.jpg',         // Set shot (first image after video)
    '/products/halo/images/front.jpg',            // Front view
    '/products/halo/images/color1.jpg',          // Color 1
    '/products/halo/images/color2.jpg',          // Color 2
    '/products/halo/images/color3.jpg',          // Color 3
    '/products/halo/images/color4.jpg',          // Color 4
    '/products/halo/images/color5.jpg',          // Color 5
    '/products/halo/images/color6.jpg',          // Color 6
    '/products/halo/images/light_blue_model.jpg', // Light blue model
    '/products/halo/images/purple_model.jpg',    // Purple model
    '/products/halo/images/jade_model.jpg',       // Jade model
    '/products/halo/images/orange_model.jpg',     // Orange model
    '/products/halo/images/blue_green_model.jpg', // Blue-green model
    '/products/halo/images/all_models.jpg',       // All models group image
  ];

  const handleAddToCart = () => {
    const colorName = colorOptions.find(c => c.id === selectedColor)?.name || 'Standard White';
    addItem({
      productId: product.id,
      productName: `${product.name} (${colorName})`,
      color: selectedColor,
      colorName: colorName,
      price: Math.round(product.price * 100), // Convert to cents
      quantity: quantity,
    });
    setAddedToCart(true);
    setQuantity(1); // Reset quantity to 1 after adding to cart
    setTimeout(() => setAddedToCart(false), 3000);
  };

  return (
    <>
      <Navbar />

      <main className="flex-1">


        {/* Product Showcase */}
        <section className="px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            {/* Product Layout - Etsy/Amazon Style */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Product Gallery */}
              <div className="order-2 lg:order-1">
                <ProductGallery
                  images={productImages}
                  video="/products/halo/videos/JB_Halo.mov"
                  alt="Halo RGB LED Lamp"
                  selectedColor={hoveredColor || selectedColor}
                  colorImageMap={colorImageMap}
                />
              </div>

              {/* Right Column - Product Info */}
              <div className="order-1 lg:order-2">
                <div className="sticky">
                  <h2 className="text-4xl font-bold text-white mb-4">{product.title}</h2>

                  {/* Price */}
                  <div className="mb-6">
                    <span className="text-4xl font-bold text-white">${product.price}</span>
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-300 text-lg mb-4">
                      Sleek and satisfying. This custom, full RGB LED lamp brings a vibe into any room.
                    </p>
                    <ul className="text-gray-300 space-y-2">
                      {product.features.map((feature) => (
                        <li key={feature.id} className="flex items-center">
                          <span className="text-accent mr-3">•</span>
                          {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Color Selection */}
                  <ColorPicker
                    colors={colorOptions}
                    selectedColor={selectedColor}
                    onColorChange={setSelectedColor}
                    onColorHover={setHoveredColor}
                  />

                  {/* Quantity */}
                  <div className="mb-8">
                    <h3 className="text-lg font-semibold text-white mb-4">Quantity</h3>
                    <div className="flex items-center space-x-4">
                      <button
                        onClick={() => setQuantity(Math.max(1, quantity - 1))}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <span className="text-white text-lg">-</span>
                      </button>
                      <span className="text-white font-semibold text-xl min-w-[40px] text-center">{quantity}</span>
                      <button
                        onClick={() => setQuantity(quantity + 1)}
                        className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors"
                      >
                        <span className="text-white text-lg">+</span>
                      </button>
                    </div>
                  </div>

                  {/* Add to Cart Button */}
                  <button
                    onClick={handleAddToCart}
                    className={`w-full border-gradient-rgb hover:bg-white/10 text-white font-semibold py-4 px-8 rounded-lg transition-all duration-300 hover:scale-105 glow-rgb mb-8 ${
                      addedToCart ? 'bg-green-500/20 border-green-500' : ''
                    }`}
                  >
                    {addedToCart ? '✓ Added to Cart!' : `Add to Cart - $${(product.price * quantity).toFixed(2)}`}
                  </button>

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