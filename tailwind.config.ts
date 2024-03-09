import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
    screens: {
      'xs': { 'max': '350px' },
      'sm': {  'max': '600px' },
      'md': {  'max': '900px' },
      'lg': {  'max': '1200px' },
      
    },
  },
  plugins: [],
};
export default config;
