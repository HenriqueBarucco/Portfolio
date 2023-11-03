import type { Config } from 'tailwindcss';

const config: Config = {
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    plugins: [require('daisyui')],
    daisyui: {
        themes: ['light', 'dark'],
    },
    theme: {
        extend: {
          colors: {
            'call-to-action': '#467e8b',
          },
          animation: {
            'bounce-slow': 'bounce 3s linear infinite',
          },
          boxShadow: {
            'call-to-action': '27px 22px 10px 0px #FFF'
          }
        },
        screens: {
          sm: "768px",
          md: "1060px"
        }
    }
};
export default config;
