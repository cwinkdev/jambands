'use client';

import Image from 'next/image';
import Link from 'next/link';
import { LogoProps } from '../types';

const sizeClasses = {
  sm: 'h-10',
  md: 'h-14',
  lg: 'h-20',
  xl: 'h-28',
};

export default function Logo({
  variant = 'light',
  type = 'standard',
  size = 'md',
  className = ''
}: LogoProps) {
  const getLogoSrc = () => {
    if (type === 'wide') {
      return variant === 'dark' ? '/jb-logo-wide-dark.png' : '/jb-logo-wide-light.png';
    }
    return variant === 'dark' ? '/jb-logo-dark.png' : '/jb-logo-light.png';
  };

  const logoSrc = getLogoSrc();
  const alt = 'JamBands - Light Up Your Night';

  return (
    <Link
      href="/"
      className={`inline-block focus-visible:outline focus-visible:outline-offset-2 focus-visible:outline-accent rounded ${className}`}
    >
      <Image
        src={logoSrc}
        alt={alt}
        width={200}
        height={80}
        className={`${sizeClasses[size]} w-auto transition-all duration-300 hover:scale-105`}
        priority
      />
    </Link>
  );
}