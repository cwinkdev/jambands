import { ProductInfo } from '../types';

export const haloI: ProductInfo = {
  id: 'halo-i',
  name: 'HALO',
  title: 'HALO',
  price: 19.99,
  category: 'lamps',
  status: 'available',
  features: [
    {
      id: 'leds',
      text: '15 RGB LEDs'
    },
    {
      id: 'effects',
      text: 'Dozens of RGB effects'
    },
    {
      id: 'housing',
      text: 'Matte white housing allows light to shine through'
    },
    {
      id: 'controls',
      text: 'Button controls for effects and brightness'
    },
    {
      id: 'power',
      text: 'USB-C powered'
    }
  ],
  warranty: [
    '30-day money-back guarantee',
    '2-year manufacturer warranty',
    'Ships within 2-3 business days'
  ],
  shipping: 'Free shipping on orders over $25'
};

export const lampProducts = {
  haloI
};