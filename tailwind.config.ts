import { defaultConfig } from "next/dist/server/config-shared";

const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '4xs': '320px',
      '3xs': '350px',
      '2xs': '450px',
      'xs': '550px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      fontSize: {
        "2xs": "0.675rem",
      },
      padding: {
          '1.25': '0.3125rem',
      },
      margin: {
          '13': '3.25rem',
          '15': '3.75rem',
          '17': '4.25rem',

          '26': '6.5rem',
      },
      height: {
          '17': '4.25rem',
          '18': '4.5rem',

          '88': '22rem',
      },
      boxShadow: {
          'rim-sm': 'inset 0 1px 0 0 #ffffff0d;',
          'rim-md': 'inset 0 1px 0 0 #ffffff22;',
          'rim-lg': 'inset 0 1px 0 0 #ffffff66;'
      },
      screens: {
          'xxs': '576px'
          // => @media (min-width: 440px) { ... }
      },
      scale: {
          '102': '1.02',
          '103': '1.03',
          '104': '1.04',
          '106': '1.06',
          '107': '1.07',
          '108': '1.08',
          
          '180': '1.8',
          '190': '1.9',
          '200': '2',
      },
      colors: {
          'night': {
              50:  '#ffffff',
              100: '#999999',
              200: '#54565c', // Icon/Text disabled color in Card BG
              300: '#51545d', // 
              400: '#373a42', // Alt small button in Above Card BG
              500: '#2d3037', // Alt line in Above Card BG
              600: '#2f323b', // Above Above Card BG
              700: '#282b30', // BG of all
              800: '#242731', // Above Card BG
              900: '#1f2128', // Card BG
              950: '#131418', // Darker
          },
          'iris': {
              500: '#c04cff',
              600: '#6c5dd3',
          },
          'navy': {
              500: '#3f8cff',
              600: '#408dff',
              700: '#6c83fe',
          },
          'green': {
              650: '#15883d',
          }
      },
      
      transitionTimingFunction: {
          'in-expo': 'cubic-bezier(0.95, 0.05, 0.795, 0.035)',
          'out-expo': 'cubic-bezier(0.19, 1, 0.22, 1)',
          'out-back-expo': 'cubic-bezier(0.175, 1.885, 0.32, 1.275)',
          'out-back': 'cubic-bezier(0.175, 2.885, 0.32, 1.275)',
          'out-back-little': 'cubic-bezier(0.175, 2.885, 0.32, 1.275)',
      },
      
      lineHeight: {
        '4.5': '1.125rem',
      }

    }
  },
  plugins: [],
};
export default config;
