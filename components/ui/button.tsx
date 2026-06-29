import * as React from 'react';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'default' | 'ghost' | 'outline';
};

export function Button({ className = '', variant = 'default', ...props }: ButtonProps) {
  const variants = {
    default: 'border-falcon-blue bg-falcon-blue text-white shadow-blue-glow hover:bg-falcon-blue/90',
    ghost: 'border-white/10 bg-white/[0.06] text-white hover:bg-white/[0.11]',
    outline: 'border-white/15 bg-transparent text-white hover:border-falcon-blue/60 hover:bg-falcon-blue/15',
  };

  return (
    <button
      className={`inline-flex items-center justify-center rounded-full border px-5 py-2.5 text-xs font-black uppercase tracking-[0.18em] transition focus:outline-none focus:ring-2 focus:ring-falcon-blue/70 disabled:pointer-events-none disabled:opacity-50 ${variants[variant]} ${className}`}
      {...props}
    />
  );
}
