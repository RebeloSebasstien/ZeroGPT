import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundColor:{
        "main-clr": "#1B243C",
        "white-blur-54": "#FFFFFF0F",
        "light-gray": "#D9D9D9",
        'light-sky': '#ECF9FE',
        "customBlue": '#E5F4FF8F',
        'very-light-gray': '#F6F6F6',
        'light-grayish-blue': '#F1F3F6',
        'custom-light-blue': '#C5EBF9',
        "background": "linear-gradient(270deg, #D9EEFF 0%, #A8D8FF 100%)",
      },
      colors:{
        "white": "#FFFFFF",
        "black": "#000000",
        "primary": "#151515",
        "secondary": "#020203",
        "dark-blue": "#1F3753",
        'dark-gray': '#333333',
        'dark-blue-gray': '#414952E5',
        'bright-cyan': '#83E9FF',
        'soft-cyan': '#65D3E6',
        'medium-gray': '#666666',
        'light-shadow': '#00000016',
        'medium-shadow': '#00000026',
        'charcoal-gray': '#222222',
        "customBlue": '#E5F4FF8F',
        'dark-gray-80': '#151515E5',
        "desaturated-gray": '#676868',
        'light-blue': '#A9B2FF',
        'navy-blue': '#000B6B',
        'off-white': '#F1F1F1',
        'midnight-blue': '#000B33',
        'deep-blue': '#001C80',
        'charcoal': '#252525',
        'slate-blue': '#1D2939',
        'light-blue-gray': '#EDF2F7',
        'soft-gray': '#DFDFDF',
        'gray-600': '#565656',
        'vibrant-blue': '#0066B2',
        'blue-sapphire': '#16469D',
        'grayish-white': '#F7F7F7',
        'dark-ash-gray': '#3B3A3B',
        'custom-light-gray': '#BCBCBC',

      },
      fontFamily: {
        'helvetica': ['Helvetica', 'sans-serif'],
        'poppins': ['Poppins', 'sans-serif'],
        'work-sans': ['Work Sans', 'sans-serif'],
      },
      boxShadow: {
        'custom-shadow': '0px 2.06px 17.55px 0px #00000026',
      },
    },
  },
  plugins: [],
};
export default config;
