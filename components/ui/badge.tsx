import * as React from 'react';

export function Badge({ className = '', ...props }: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={`inline-flex items-center rounded-full border border-white/10 bg-white/[0.08] px-3 py-1 text-[10px] font-black uppercase tracking-[0.18em] text-white backdrop-blur-xl ${className}`}
      {...props}
    />
  );
}
