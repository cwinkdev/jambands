import { ButtonProps } from '../types';

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  onClick,
  className = '',
  ...props
}: ButtonProps & React.ButtonHTMLAttributes<HTMLButtonElement>) {
  const baseClasses = 'font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2 focus:ring-offset-gray-800';

  const variants = {
    primary: 'bg-accent hover:bg-accent/90 text-white',
    secondary: 'border border-white/20 hover:bg-white/10 text-white',
    accent: 'bg-gradient-rgb hover:bg-gradient-rgb-animated text-white glow-rgb',
    animated: 'bg-gradient-rgb-animated text-white glow-rgb-strong hover:scale-105',
    ghost: 'bg-white/10 hover:bg-white/20 text-white',
  };

  const sizes = {
    sm: 'py-2 px-4 text-sm',
    md: 'py-3 px-6 text-base',
    lg: 'py-4 px-10 text-lg',
  };

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  return (
    <button
      className={classes}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
}