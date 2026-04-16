/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#10b981',
          dark: '#059669',
          accent: '#0f766e',
        },
        bg: {
          DEFAULT: '#0b1220',
          soft: '#0f1729',
          muted: '#111c32',
        },
        border: '#1f2937',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb',
            a: { color: '#10b981' },
            h1: { color: '#e5e7eb' },
            h2: { color: '#e5e7eb' },
            h3: { color: '#e5e7eb' },
            strong: { color: '#e5e7eb' },
          },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
};
