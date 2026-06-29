import Image from 'next/image';
import { getInitials } from '@/lib/utils';

type PlayerAvatarProps = {
  name: string;
  image?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
};

const sizes = {
  sm: 'h-12 w-12',
  md: 'h-16 w-16',
  lg: 'h-28 w-28',
};

const imageSizes = {
  sm: 48,
  md: 64,
  lg: 112,
};

export default function PlayerAvatar({ name, image, size = 'md', className = '' }: PlayerAvatarProps) {
  return (
    <div className={`relative flex shrink-0 items-center justify-center overflow-hidden rounded-full border border-white/15 bg-gradient-to-br from-white/14 via-white/6 to-falcon-orange/18 shadow-glow ${sizes[size]} ${className}`}>
      {image ? (
        <Image src={image} alt={`${name} profile photo`} width={imageSizes[size]} height={imageSizes[size]} className="h-full w-full object-cover" />
      ) : (
        <svg viewBox="0 0 96 96" className="h-[68%] w-[68%] text-white/72" aria-label={`${name} placeholder avatar`} role="img">
          <circle cx="48" cy="31" r="17" fill="currentColor" opacity="0.95" />
          <path d="M18 84C21 63 33 53 48 53C63 53 75 63 78 84H18Z" fill="currentColor" opacity="0.78" />
          <title>{getInitials(name)}</title>
        </svg>
      )}
    </div>
  );
}
