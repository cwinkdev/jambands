// Navigation Types
export interface NavItem {
  name: string;
  href: string;
  current?: boolean;
}

// Product Types
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