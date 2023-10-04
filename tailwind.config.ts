import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF',
        gray: {
          25: '#FEFEFE',
          50: '#F6F8FF',
          600: '#697C9A',
          800: '#2B3442',
          900: '#222731',
        },
        cyan: {
          200: '#90A4D4',
          500: '#4B6A9B',
          600: '#1E2A47',
          800: '#141D2F',
        },
        blue: {
          50: '#60ABFF',
          150: '#0079FF',
        },
        error: {
          50: '#F74646'
        },
      },
      fontSize: {
        'md': '0.8125rem',
        '2md': '1.625rem',
      },
    }
  },
  plugins: [],
}
export default config
