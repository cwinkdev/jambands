import { ProductInfo } from '@/app/types';

export const haloI: ProductInfo = {
  id: 'halo',
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
  shippingWeight: 4.62, // ounces
  shippingLength: 6, // inches
  shippingWidth: 6, // inches
  shippingHeight: 7, // inches
};

export const lampProducts = {
  haloI
};