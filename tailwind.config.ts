import type { Config } from 'tailwindcss';
import animate from 'tailwindcss-animate';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        tactical: {
          dark: '#090D12',
          darker: '#0A0E13',
          card: '#1A232E',
          border: '#2A3644',
          accent: '#4B6B40',
          'accent-light': '#22C55E',
          warning: '#F59E0B',
          alert: '#EF4444',
          gold: '#D4AF37',
        },
      },
      fontFamily: {
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        tactical: '0 0 0 1px rgba(74, 111, 79, 0.3), 0 0 30px rgba(34, 197, 94, 0.08)',
      },
    },
  },
  plugins: [animate],
};

export default config;
