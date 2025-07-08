import Link from 'next/link';
import Logo from './Logo';

const footerNavigation = {
  products: [
    { name: 'LED Wristbands', href: '/wristbands' },
    { name: 'Lamps', href: '/lamps' },
    { name: 'Accessories', href: '/accessories' },
  ],
  company: [
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Support', href: '/support' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Terms of Service', href: '/terms' },
    { name: 'Shipping', href: '/shipping' },
  ],
};

const socialLinks = [
  {
    name: 'Instagram',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path
          fillRule="evenodd"
          d="M12.017 0C8.396 0 7.929.013 6.713.06 5.499.107 4.677.277 3.963.525a5.038 5.038 0 00-1.834 1.194A5.038 5.038 0 00.525 3.963C.277 4.677.107 5.5.06 6.713.013 7.929 0 8.396 0 12.017s.013 4.088.06 5.304c.047 1.214.217 2.036.465 2.75a5.038 5.038 0 001.194 1.834 5.038 5.038 0 001.834 1.194c.714.248 1.536.418 2.75.465 1.216.047 1.683.06 5.304.06s4.088-.013 5.304-.06c1.214-.047 2.036-.217 2.75-.465a5.038 5.038 0 001.834-1.194 5.038 5.038 0 001.194-1.834c.248-.714.418-1.536.465-2.75.047-1.216.06-1.683.06-5.304s-.013-4.088-.06-5.304c-.047-1.214-.217-2.036-.465-2.75a5.038 5.038 0 00-1.194-1.834A5.038 5.038 0 0020.25.525C19.536.277 18.714.107 17.5.06 16.284.013 15.817 0 12.196 0h-.179zm-.717 1.442h.718c3.136 0 3.389.007 4.583.052 1.025.047 1.58.218 1.95.362.49.19.84.418 1.207.785.367.368.595.717.785 1.207.144.37.315.925.362 1.95.045 1.194.055 1.448.055 4.26 0 2.811-.01 3.065-.055 4.26-.047 1.025-.218 1.58-.362 1.95-.19.49-.418.84-.785 1.207a3.252 3.252 0 01-1.207.785c-.37.144-.925.315-1.95.362-1.194.045-1.448.055-4.26.055-2.811 0-3.065-.01-4.26-.055-1.025-.047-1.58-.218-1.95-.362a3.252 3.252 0 01-1.207-.785 3.252 3.252 0 01-.785-1.207c-.144-.37-.315-.925-.362-1.95-.045-1.194-.055-1.448-.055-4.26 0-2.811.01-3.065.055-4.26.047-1.025.218-1.58.362-1.95.19-.49.418-.84.785-1.207a3.252 3.252 0 011.207-.785c.37-.144.925-.315 1.95-.362 1.194-.045 1.448-.055 4.26-.055z"
          clipRule="evenodd"
        />
        <path d="M12.017 5.838a6.18 6.18 0 100 12.36 6.18 6.18 0 000-12.36zM12.017 15.55a3.733 3.733 0 110-7.466 3.733 3.733 0 010 7.466zM19.626 5.627a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
      </svg>
    ),
  },
  {
    name: 'TikTok',
    href: '#',
    icon: (
      <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6">
        <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Logo variant="light" type="wide" size="lg" />
            <p className="mt-4 text-sm text-gray-300">
              Light up your night with premium LED accessories. Perfect for concerts, parties, and unforgettable events.
            </p>
            <div className="mt-6 flex space-x-4">
              {socialLinks.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <span className="sr-only">{item.name}</span>
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h3 className="text-sm font-semibold text-white">Products</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.products.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.company.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2">
              {footerNavigation.legal.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/10">
          <p className="text-sm text-gray-400 text-center">
            &copy; {new Date().getFullYear()} JamBands. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}