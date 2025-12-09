/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors from your current theme
        navy: '#0a192f',
        'dark-navy': '#020c1b',
        'light-navy': '#112240',
        'lightest-navy': '#233554',
        'navy-shadow': 'rgba(2,12,27,0.7)',
        'dark-slate': '#495670',
        slate: '#8892b0',
        'light-slate': '#a8b2d1',
        'lightest-slate': '#ccd6f6',
        white: '#e6f1ff',
        green: '#FCF532',
        'green-tint': 'rgba(252,245,50,0.1)',
      },
      fontFamily: {
        sans: [
          'Calibre',
          'Inter',
          'San Francisco',
          'SF Pro Text',
          '-apple-system',
          'system-ui',
          'sans-serif',
        ],
        mono: ['SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', 'monospace'],
      },
      fontSize: {
        xxs: '12px',
        xs: '13px',
        sm: '14px',
        md: '16px',
        lg: '18px',
        xl: '20px',
        '2xl': '22px',
        '3xl': '24px',
        '4xl': '26px',
        heading: '32px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
      borderRadius: {
        DEFAULT: '4px',
      },
      transitionDuration: {
        DEFAULT: '250ms',
      },
      transitionTimingFunction: {
        DEFAULT: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
      },
      screens: {
        xs: '480px',
        sm: '600px',
        md: '768px',
        lg: '900px',
        xl: '1080px',
        '2xl': '1200px',
        '3xl': '1400px',
      },
      boxShadow: {
        DEFAULT: '0 10px 30px -15px rgba(2,12,27,0.7)',
        lg: '0 10px 30px -15px rgba(2,12,27,0.7)',
      },
    },
  },
  plugins: [],
};
