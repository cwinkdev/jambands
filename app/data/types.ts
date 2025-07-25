export interface ProductFeature {
  id: string;
  text: string;
}

export interface ProductInfo {
  id: string;
  name: string;
  title: string;
  price: number;
  category: 'lamps' | 'wristbands' | 'accessories';
  status: 'available' | 'coming-soon' | 'in-development';
  description?: string;
  features: ProductFeature[];
  specifications?: {
    hardware?: string[];
    experience?: string[];
    technical?: string[];
  };
  warranty: string[];
  shipping: string;
  releaseDate?: string;
}

export type ProductCategory = 'lamps' | 'wristbands' | 'accessories';