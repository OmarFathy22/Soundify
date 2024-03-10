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
      xs: { max: "350px" },
      sm: { min: "350px", max: "600px" },
      md: { min: "600px", max: "900px" },
      lg: { min: "900px", max: "1200px" },
      xl: { min: "1200px", max: "1500px" },
      xxl: { min: "1500px" },
      max_600: { max: "600px" },
      max_900: { max: "900px" },
      max_1200: { max: "1200px" },
      max_1500: { max: "1500px" },
      
    },
  },
  plugins: [],
};
export default config;
