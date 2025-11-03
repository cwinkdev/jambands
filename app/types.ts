// Navigation Types
export interface NavItem {
  name: string;
  href?: string;
  current?: boolean;
  dropdown?: DropdownItem[];
}

export interface DropdownItem {
  name: string;
  href?: string; // Optional - if no href, it's just a label/header
  description?: string;
}

// Product Types
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
  releaseDate?: string;
  shippingWeight?: number; // ounces
  shippingLength?: number; // inches
  shippingWidth?: number; // inches
  shippingHeight?: number; // inches
}

export type ProductCategory = 'lamps' | 'wristbands' | 'accessories';

// Legacy Product type (may be used elsewhere - keeping for compatibility)
export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'wristbands' | 'lamps' | 'accessories';
  image?: string;
}

// Component Props
export interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  onClick?: () => void;
  className?: string;
}

export interface LogoProps {
  variant?: 'light' | 'dark';
  type?: 'standard' | 'wide';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  className?: string;
}