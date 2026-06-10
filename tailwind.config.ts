import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#04090F',
          900: '#0A1628',
          800: '#0F1E38',
          700: '#162444',
          600: '#1E3056',
          500: '#264065',
        },
        gold: {
          300: '#F0D080',
          400: '#E0B84A',
          500: '#C9A84C',
          600: '#B8942A',
          700: '#9A7B1E',
        },
        slate: {
          350: '#94A3B8',
        },
      },
      fontFamily: {
        serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-ibm-mono)', 'monospace'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#1e293b',
            h2: { color: '#0A1628' },
            h3: { color: '#0A1628' },
            strong: { color: '#0A1628' },
            a: { color: '#C9A84C' },
          },
        },
      },
      animation: {
        'ticker': 'ticker 40s linear infinite',
        'fade-in': 'fadeIn 0.4s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
      },
      keyframes: {
        ticker: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        slideUp: {
          from: { opacity: '0', transform: 'translateY(20px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
