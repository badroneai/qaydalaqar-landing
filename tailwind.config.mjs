/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#C5CCD9',
          dark: '#9EA9BF',
          accent: '#C5A55A',
        },
        bg: {
          DEFAULT: '#020617',
          soft: '#0f172a',
          muted: '#1e293b',
        },
        border: '#334155',
        'text-muted': '#94a3b8',
      },
      fontFamily: {
        arabic: ['"IBM Plex Sans Arabic"', 'system-ui', '-apple-system', '"Segoe UI"', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#e5e7eb',
            a: { color: '#C5CCD9' },
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
