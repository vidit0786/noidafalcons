import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        falcon: {
          blue: '#0A4D9B',
          midnight: '#0A0A0A',
          silver: '#C0C0C0',
          white: '#FFFFFF',
          orange: '#FF6A00',
          amber: '#FF9A1F',
          sky: '#1597D3',
          navy: '#042138',
        },
      },
      fontFamily: {
        display: ['var(--font-display)', 'Inter', 'system-ui', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        glow: '0 0 35px rgba(255, 106, 0, 0.45)',
        'glow-strong': '0 0 60px rgba(255, 106, 0, 0.72)',
        'blue-glow': '0 0 35px rgba(10, 77, 155, 0.48)',
        glass: '0 24px 80px rgba(0, 0, 0, 0.32)',
      },
      backgroundImage: {
        'radial-blue': 'radial-gradient(circle at center, rgba(255,106,0,.46), transparent 62%)',
        'jersey-gradient': 'linear-gradient(135deg, #ff7a00 0%, #ff5a00 48%, #d84300 100%)',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
      animation: {
        marquee: 'marquee 26s linear infinite',
        float: 'float 5s ease-in-out infinite',
        shimmer: 'shimmer 2.8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
export default config;
