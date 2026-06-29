import Image from 'next/image';

type TeamLogoProps = {
  className?: string;
  showText?: boolean;
  size?: 'sm' | 'md' | 'lg';
};

const sizes = {
  sm: 'h-11 w-11',
  md: 'h-14 w-14',
  lg: 'h-24 w-24',
};

const imageSizes = {
  sm: 44,
  md: 56,
  lg: 96,
};

const cn = (...classes: Array<string | undefined>) => classes.filter(Boolean).join(' ');

export default function TeamLogo({ className, showText = true, size = 'md' }: TeamLogoProps) {
  return (
    <div className={cn('flex items-center gap-3', className)} aria-label="Noida Falcons logo">
      <div className={cn('relative shrink-0 overflow-hidden rounded-full bg-gradient-to-br from-white via-falcon-orange to-falcon-sky p-[2px] shadow-glow', sizes[size])}>
        <div className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-full bg-black">
          <Image
            src="/images/noida-falcons-official-logo.png"
            alt="Noida Falcons official logo"
            width={imageSizes[size]}
            height={imageSizes[size]}
            className="h-full w-full rounded-full object-cover"
            priority={size !== 'sm'}
          />
        </div>
      </div>
      {showText && (
        <div className="leading-none">
          <p className="font-display text-base font-black uppercase tracking-[0.18em] text-white sm:text-lg">Noida</p>
          <p className="text-xs font-bold uppercase tracking-[0.28em] text-falcon-silver">Falcons</p>
        </div>
      )}
    </div>
  );
}
