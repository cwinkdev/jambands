// Export all product categories
export * from './lamps';
export * from './wristbands';
export * from './accessories';

// Export types from main types file
export type { ProductInfo, ProductFeature, ProductCategory } from '@/app/types';

// Convenience exports for easy access
import { lampProducts } from './lamps';
import { wristbandProducts } from './wristbands';
import { accessoryProducts } from './accessories';

// Currently only contains Halo - other categories are placeholders
export const allProducts = {
  ...lampProducts
  // wristbands and accessories are empty for now
};

export const productsByCategory = {
  lamps: lampProducts,
  wristbands: wristbandProducts,
  accessories: accessoryProducts
};